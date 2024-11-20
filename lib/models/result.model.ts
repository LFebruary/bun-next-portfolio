import { ZodIssue } from 'zod';

type Result = {
    success: boolean;
    errors?: ZodIssue[];
};

export default Result;
