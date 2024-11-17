import { WorkProject } from '@/interfaces/workProject.interface';

export default interface WorkProjectCardProps {
    project: WorkProject;
    maxDescriptionHeight: number;
    maxTechSectionHeight: number;
}
