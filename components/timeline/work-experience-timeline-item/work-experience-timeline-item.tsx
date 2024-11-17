import theme from '@/constants/theme';
import { useInView } from 'react-intersection-observer';
import { DateFormatter } from '@/utils';
import WorkExperienceCard from '@/components/work-experience-card';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { FC, memo, useMemo, useState } from 'react';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';
import WorkExperienceTimelineItemProps from './work-experience-timeline-item.props';

const WorkExperienceTimelineItem: FC<WorkExperienceTimelineItemProps> = memo(
    ({ index, endDate, startDate, companyDescription, companyName, languages }) => {
        const [inViewState, setInViewState] = useState(false);

        const justify = useMemo(() => {
            return index === 0 ? 'flex-start' : index % 2 == 0 ? 'flex-start' : 'flex-end';
        }, [index]);

        const current = useMemo(() => {
            return !endDate;
        }, [endDate]);

        const headingColor = useMemo(() => {
            return inViewState ? theme.palette.common.white : undefined;
        }, [inViewState]);

        const headingShadow = useMemo(() => {
            return inViewState ? `0 0 10px ${theme.palette.common.white}` : undefined;
        }, [inViewState]);

        const timelineConnectorClass = useMemo(() => {
            return current ? 'timeline-connector-present' : undefined;
        }, [current]);

        const timelineDotColor = useMemo(() => {
            return current ? 'info' : undefined;
        }, [current]);

        const [ref] = useInView({
            onChange: setInViewState,
            threshold: 0.8,
        });

        return (
            <TimelineItem ref={ref} sx={{ minHeight: 32 }}>
                <TimelineOppositeContent
                    color="textSecondary"
                    sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
                >
                    <Fade in={inViewState} timeout={750}>
                        <span>Started</span>
                    </Fade>
                    <Typography
                        variant="h6"
                        sx={{
                            marginBottom: -0.5,
                            marginInline: 0.5,
                            fontWeight: 900,
                            transition: 'all 1s ease',
                            color: headingColor,
                            textShadow: headingShadow,
                        }}
                    >
                        {DateFormatter.formatDate(startDate)}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector className={timelineConnectorClass} />
                    <TimelineDot color={timelineDotColor} />
                </TimelineSeparator>
                <TimelineContent>
                    <WorkExperienceCard
                        margin
                        startDate={startDate}
                        endDate={endDate}
                        companyDescription={companyDescription}
                        companyName={companyName}
                        languages={languages}
                        justifyContent={justify}
                        shadow={inViewState}
                    />
                </TimelineContent>
            </TimelineItem>
        );
    }
);

WorkExperienceTimelineItem.displayName = 'WorkExperienceTimelineItem';

export default WorkExperienceTimelineItem;
