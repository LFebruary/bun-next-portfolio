import theme from '@/constants/theme';
import {
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
} from '@mui/lab';
import { Typography } from '@mui/material';
import { FC, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const PresentTimelineItem: FC = () => {
    const [inViewState, setInViewState] = useState(false);

    const [ref] = useInView({
        onChange: setInViewState,
    });

    return (
        <TimelineItem ref={ref} sx={{ minHeight: 32 }}>
            <TimelineOppositeContent color="textSecondary">
                <Typography
                    variant="h6"
                    sx={{
                        paddingTop: -2.5,
                        marginInline: 0.5,
                        fontWeight: 900,
                        color: inViewState ? theme.palette.common.white : undefined,
                        textShadow: inViewState
                            ? `0 0 10px ${theme.palette.common.white}`
                            : undefined,
                    }}
                >
                    Present
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="info" />
                <TimelineConnector className="timeline-connector-present" />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
        </TimelineItem>
    );
};

export default PresentTimelineItem;
