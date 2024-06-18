import { TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, Timeline } from "@mui/lab";
import moment from "moment";
import { FC, ReactNode, useState } from "react";
import { WorkExperience, WorkExperienceProps } from "../work-experience/work-experience";
import theme from "@/constants/theme";
import { Fade, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";


const formatDate = (date: Date) => (moment(date)).format('MMM YYYY');

interface WorkExperienceTimelineItemProps extends WorkExperienceProps {
    index: number;
}

export const WorkExperienceTimelineItem: FC<WorkExperienceTimelineItemProps> = (props) => {
    const [inViewState, setInViewState] = useState(false);

    const justify = props.index === 0
        ? "flex-start"
        : (props.index % 2) == 0
            ? "flex-start"
            : "flex-end";

    const current = !props.endDate;

    const [ref, inView, entry] = useInView({
        onChange: (inView) => setInViewState(inView),
        threshold: 0.8,
    });

    return (
        <TimelineItem ref={ref} sx={{ minHeight: 32 }}>
            <TimelineOppositeContent color="textSecondary" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <Fade in={inViewState} timeout={750}>
                    <span>Started around</span>
                </Fade>
                <Typography variant="h6" sx={{
                    marginBottom: -.5,
                    marginInline: .5,
                    fontWeight: 900,
                    transition: 'all 1s ease',
                    color: inViewState ? theme.palette.common.white : undefined,
                    textShadow: inViewState ? `0 0 10px ${theme.palette.common.white}` : undefined,
                }}>
                    {formatDate(props.startDate)}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector className={current ? "timeline-connector-present" : undefined} />
                <TimelineDot color={current ? 'info' : undefined} />
            </TimelineSeparator>
            <TimelineContent>
                <WorkExperience
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

export const WorkExperienceTimeline: FC<{ items: ReactNode[] }> = (props) => {
    return (
        <Timeline position="alternate-reverse">
            <PresentTimelineItem />
            {props.items.map((item) => item)}
        </Timeline>
    );
};

export const PresentTimelineItem: FC<{}> = () => {
    const [inViewState, setInViewState] = useState(false);



    const [ref, inView, entry] = useInView({
        onChange: (inView) => setInViewState(inView),
    });

    return (
        <TimelineItem ref={ref} sx={{ minHeight: 32 }}>
            <TimelineOppositeContent color="textSecondary">
                <Typography variant="h6" sx={{
                    paddingTop: -2.5,
                    marginInline: .5,
                    fontWeight: 900,
                    color: inViewState ? theme.palette.common.white : undefined,
                    textShadow: inViewState ? `0 0 10px ${theme.palette.common.white}` : undefined,
                }}>
                    Present
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='info' />
                <TimelineConnector className="timeline-connector-present" />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
        </TimelineItem>
    );
}