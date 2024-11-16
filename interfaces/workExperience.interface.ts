import { ProgrammingLanguage } from './programmingLanguage.interface';

export interface WorkExperience {
    startDate: Date;
    endDate?: Date | undefined;
    companyName: string;
    companyDescription: string;
    languages: ProgrammingLanguage[] | undefined;
}
