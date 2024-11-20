import ContactMessage from '@/lib/models/contactMessage/contactMessage.model';
import prisma from '@/lib/prisma/prisma';
import { ContactMessageStatus, ContactSecurityStatus } from '../entities';

class ContactRepositoryImpl {
    async actionMessage(messageId: number, ignored?: boolean) {
        const contactMessage = await prisma.contactMessage.findFirst({
            where: {
                id: messageId,
            },
        });

        if (!contactMessage) {
            throw new Error('Contact message with id not found');
        }

        await prisma.contactMessage.update({
            where: {
                id: messageId,
            },
            data: {
                status: ignored ? ContactMessageStatus.IGNORED : ContactMessageStatus.ACTIONED,
            },
        });
    }

    async markAsVerified(identifier: number | string) {
        let contactId: number | undefined = undefined;

        if (typeof identifier === 'number') {
            contactId = (
                await prisma.contact.findFirst({
                    where: {
                        id: {
                            equals: identifier,
                        },
                    },
                    select: {
                        id: true,
                    },
                })
            )?.id;
        }

        if (typeof identifier === 'string') {
            contactId = (
                await prisma.contact.findFirst({
                    where: {
                        email: {
                            equals: identifier,
                            mode: 'insensitive',
                        },
                    },
                    select: {
                        id: true,
                    },
                })
            )?.id;
        }

        if (!contactId) {
            throw new Error('Contact with id not found');
        }

        const updatedContact = await prisma.contact.update({
            where: {
                id: contactId,
            },
            data: {
                status: ContactSecurityStatus.VERIFIED,
            },
        });

        const messageIds = (
            await prisma.contactMessage.findMany({
                where: {
                    contactId: contactId,
                },
                select: {
                    id: true,
                },
            })
        )?.map((message) => message.id);

        await prisma.contactMessage.updateMany({
            where: {
                id: {
                    in: messageIds,
                },
            },
            data: {
                status: ContactMessageStatus.PENDING,
            },
        });

        return updatedContact;
    }

    async create(message: ContactMessage) {
        let contact = await prisma.contact.findFirst({
            where: {
                email: {
                    equals: message.email,
                    mode: 'insensitive',
                },
            },
        });

        if (!contact) {
            contact = await prisma.contact.create({
                data: {
                    name: message.name,
                    email: message.email,
                    companyName: message.companyName,
                    status: ContactSecurityStatus.PENDING_VERIFICATION,
                },
            });
        }

        let contactMessage = await prisma.contactMessage.findFirst({
            where: {
                contactId: {
                    equals: contact.id,
                },
                message: {
                    equals: message.message,
                    mode: 'insensitive',
                },
            },
        });

        if (!contactMessage) {
            contactMessage = await prisma.contactMessage.create({
                data: {
                    contactId: contact.id,
                    status: ContactMessageStatus.PENDING_VERIFICATION,
                    message: message.message,
                },
            });
        }

        return {
            contact,
            contactMessage,
        };
    }
}

export const ContactRepository = new ContactRepositoryImpl();
