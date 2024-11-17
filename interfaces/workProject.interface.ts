import { PersonalProject } from './personalProject.interface';

export interface WorkProject extends PersonalProject {
    employer: 'Farsoft' | 'Mediclinic' | 'Dotdigital';
}
