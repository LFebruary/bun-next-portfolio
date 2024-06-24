import { FC, ReactNode } from "react";
import PresentTimelineItem from "../present-timeline-item";
import Timeline from "@mui/lab/Timeline";

const WorkExperienceTimeline: FC<{ items: ReactNode[] }> = (props) => {
    return (
        <Timeline position="alternate-reverse">
            <PresentTimelineItem key="present" />
            {props.items.map((item) => item)}
        </Timeline>
    );
};

export default WorkExperienceTimeline;
