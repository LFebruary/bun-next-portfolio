import { ProjectLink } from '.';

export interface PersonalProject {
    name: string;
    description: string;
    links?: ProjectLink | ProjectLink[];
    technologies: string[];
}
