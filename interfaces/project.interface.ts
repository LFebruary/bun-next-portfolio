import { ProjectLink } from '.';

export interface Project {
    name: string;
    description: string;
    links: ProjectLink[];
    technologies: string[];
}
