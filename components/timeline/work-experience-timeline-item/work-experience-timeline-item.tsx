import theme from "@/constants/theme";
import { WorkExperience } from "@/interfaces"
import { useInView } from "react-intersection-observer";
import { DateFormatter } from "@/utils";
import WorkExperienceCard from "@/components/work-experience-card/work-experience-card";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { FC, useState } from "react";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";

interface WorkExperienceTimelineItemProps extends WorkExperience {
    index: number;
}

const WorkExperienceTimelineItem: FC<WorkExperienceTimelineItemProps> = (props) => {
    const [inViewState, setInViewState] = useState(false);

    const justify = props.index === 0
        ? "flex-start"
        : (props.index % 2) == 0
            ? "flex-start"
            : "flex-end";

    const current = !props.endDate;

    const [ref] = useInView({
        onChange: (inView) => setInViewState(inView),
        threshold: 0.8,
    });

    return (
        <TimelineItem ref={ref} sx={{ minHeight: 32 }}>
            <TimelineOppositeContent color="textSecondary" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <Fade in={inViewState} timeout={750}>
                    <span>Started</span>
                </Fade>
                <Typography variant="h6" sx={{
                    marginBottom: -.5,
                    marginInline: .5,
                    fontWeight: 900,
                    transition: 'all 1s ease',
                    color: inViewState ? theme.palette.common.white : undefined,
                    textShadow: inViewState ? `0 0 10px ${theme.palette.common.white}` : undefined,
                }}>
                    {DateFormatter.formatDate(props.startDate)}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector className={current ? "timeline-connector-present" : undefined} />
                <TimelineDot color={current ? 'info' : undefined} />
            </TimelineSeparator>
            <TimelineContent>
                <WorkExperienceCard
                    margin
                    startDate={props.startDate}
                    endDate={props.endDate}
                    companyDescription={props.companyDescription}
                    companyName={props.companyName}
                    languages={props.languages}
                    justifyContent={justify}
                    shadow={inViewState}
                />
            </TimelineContent>
        </TimelineItem>
    );
}

export default WorkExperienceTimelineItem;