import { FC, memo, useMemo } from 'react';
import PresentTimelineItem from '../present-timeline-item';
import Timeline from '@mui/lab/Timeline';
import WorkExperienceTimelineItem from '../work-experience-timeline-item';
import WorkExperienceTimelineProps from './work-experience-timeline.props';

const WorkExperienceTimeline: FC<WorkExperienceTimelineProps> = memo(({ experiences }) => {
    const timelineItems = useMemo(() => {
        return experiences.map((workExperience, index) => (
            <WorkExperienceTimelineItem
                key={`${workExperience.companyName.replace(/\s+/g, '')}-${index}`}
                startDate={workExperience.startDate}
                endDate={workExperience.endDate}
                companyDescription={workExperience.companyDescription}
                companyName={workExperience.companyName}
                languages={workExperience.languages}
                index={index}
            />
        ));
    }, [experiences]);

    return (
        <Timeline position="alternate-reverse">
            <PresentTimelineItem key="present" />
            {...timelineItems}
        </Timeline>
    );
});

WorkExperienceTimeline.displayName = 'WorkExperienceTimeline';

export default WorkExperienceTimeline;
