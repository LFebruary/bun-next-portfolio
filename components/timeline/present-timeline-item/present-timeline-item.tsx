"use client";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography, useTheme } from "@mui/material";
import { TypographyVariant } from "@mui/material/styles";
import { FC, memo, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

const PresentTimelineItem: FC<{
  variant: TypographyVariant;
}> = memo(({ variant }) => {
  const [inViewState, setInViewState] = useState(false);
  const theme = useTheme();

  const [ref] = useInView({
    onChange: setInViewState,
  });

  const headingColor = useMemo(() => {
    return inViewState ? theme.palette.common.white : undefined;
  }, [inViewState, theme.palette.common.white]);

  const headingShadow = useMemo(() => {
    return inViewState ? `0 0 10px ${theme.palette.common.white}` : undefined;
  }, [inViewState, theme.palette.common.white]);

  return (
    <TimelineItem ref={ref} sx={{ minHeight: 32 }}>
      <TimelineOppositeContent color="textSecondary">
        <Typography
          sx={{
            color: headingColor,
            fontSize: 20,
            fontWeight: 900,
            marginInline: 0.5,
            paddingTop: -2.5,
            textShadow: headingShadow,
          }}
          variant={variant}
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

PresentTimelineItem.displayName = "PresentTimelineItem";

export default PresentTimelineItem;
