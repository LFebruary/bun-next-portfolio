import { z } from 'zod';
import ContactMessageSchema from '@/lib/models/contactMessage/contactMessage.schema';

type ContactMessage = z.infer<typeof ContactMessageSchema>;

export default ContactMessage;
