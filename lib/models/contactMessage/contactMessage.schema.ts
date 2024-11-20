import { string, object } from 'zod';
import { profanity } from '@2toad/profanity';

const ContactMessageSchema = object({
    name: string({ message: '' }),
    email: string().email({ message: '' }),
    companyName: string({ message: '' }).optional(),
    message: string({ message: '' }).refine((value) => profanity.exists(value), {
        message: "Message can't contain profanity.",
    }),
});

export default ContactMessageSchema;
