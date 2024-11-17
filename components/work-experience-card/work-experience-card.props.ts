import { WorkExperience } from '@/interfaces';

export default interface WorkExperienceCardProps extends WorkExperience {
    minHeight?: boolean;
    margin?: boolean;
    maxWidth?: boolean;
    justifyContent: 'center' | 'end' | 'flex-end' | 'flex-start' | 'start' | undefined;
    shadow?: boolean;
}
