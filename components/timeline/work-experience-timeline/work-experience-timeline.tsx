import Timeline from "@mui/lab/Timeline";
import { FC, memo, useMemo } from "react";
import PresentTimelineItem from "../present-timeline-item/present-timeline-item";
import WorkExperienceTimelineItem from "../work-experience-timeline-item/work-experience-timeline-item";
import WorkExperienceTimelineProps from "./work-experience-timeline.props";

const WorkExperienceTimeline: FC<WorkExperienceTimelineProps> = memo(
  ({ experiences }) => {
    const timelineItems = useMemo(() => {
      return experiences.map((workExperience, index) => (
        <WorkExperienceTimelineItem
          companyDescription={workExperience.companyDescription}
          companyName={workExperience.companyName}
          endDate={workExperience.endDate}
          index={index}
          key={`${workExperience.companyName.replace(/\s+/g, "")}-${index}`}
          languages={workExperience.languages}
          startDate={workExperience.startDate}
        />
      ));
    }, [experiences]);

    return (
      <Timeline position="alternate-reverse">
        <PresentTimelineItem key="present" variant="h2" />
        {...timelineItems}
      </Timeline>
    );
  },
);

WorkExperienceTimeline.displayName = "WorkExperienceTimeline";

export default WorkExperienceTimeline;
