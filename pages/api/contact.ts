import ContactMessageSchema from '@/lib/models/contactMessage/contactMessage.schema';
import Result from '@/lib/models/result.model';
import Repositories from '@/lib/prisma/repositories';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(req: NextApiRequest, res: NextApiResponse<Result>) {
    if (req.method !== 'POST') {
        res.status(415).json({ success: false });
        return;
    }
    if (!req.body) {
        res.status(400).json({
            success: false,
            errors: [
                {
                    message: 'Body provided is invalid',
                    code: 'custom',
                    path: [],
                },
            ],
        });
        return;
    }

    const result = await ContactMessageSchema.safeParseAsync(req.body);
    if (!result.success || result.error) {
        res.status(400).json({
            success: false,
            errors: result.error.errors,
        });
        return;
    }

    try {
        await Repositories.ContactRepository.create(result.data);
    } catch {
        res.status(400).json({
            success: false,
            errors: [
                {
                    message: 'An unexpected error occurred',
                    code: 'custom',
                    path: [],
                },
            ],
        });
    }

    res.status(201).json({ success: true });
}
