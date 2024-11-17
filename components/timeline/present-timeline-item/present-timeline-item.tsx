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
import { FC, memo, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const PresentTimelineItem: FC = memo(() => {
    const [inViewState, setInViewState] = useState(false);

    const [ref] = useInView({
        onChange: setInViewState,
    });

    const headingColor = useMemo(() => {
        return inViewState ? theme.palette.common.white : undefined;
    }, [inViewState]);

    const headingShadow = useMemo(() => {
        return inViewState ? `0 0 10px ${theme.palette.common.white}` : undefined;
    }, [inViewState]);

    return (
        <TimelineItem ref={ref} sx={{ minHeight: 32 }}>
            <TimelineOppositeContent color="textSecondary">
                <Typography
                    variant="h6"
                    sx={{
                        paddingTop: -2.5,
                        marginInline: 0.5,
                        fontWeight: 900,
                        color: headingColor,
                        textShadow: headingShadow,
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
});

PresentTimelineItem.displayName = 'PresentTimelineItem';

export default PresentTimelineItem;
