import {
    ContactMessage as ContactMessageEntity,
    Contact as ContactEntity,
    ContactMessageStatus,
    ContactSecurityStatus,
} from '@prisma/client';

export type { ContactMessageEntity, ContactEntity };
export { ContactSecurityStatus, ContactMessageStatus };
