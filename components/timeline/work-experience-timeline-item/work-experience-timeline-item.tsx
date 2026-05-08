"use client";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { useTheme } from "@mui/material";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { FC, memo, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import DateFormatter from "../../../utils/dateFormatter.util";
import WorkExperienceCard from "../../work-experience-card/work-experience-card";
import WorkExperienceTimelineItemProps from "./work-experience-timeline-item.props";

const WorkExperienceTimelineItem: FC<WorkExperienceTimelineItemProps> = memo(
  ({
    index,
    endDate,
    startDate,
    companyDescription,
    companyName,
    languages,
  }) => {
    const [inViewState, setInViewState] = useState(false);
    const theme = useTheme();

    const justify = useMemo(() => {
      return index === 0
        ? "flex-start"
        : index % 2 == 0
          ? "flex-start"
          : "flex-end";
    }, [index]);

    const current = useMemo(() => {
      return !endDate;
    }, [endDate]);

    const headingColor = useMemo(() => {
      return inViewState ? theme.palette.common.white : undefined;
    }, [inViewState, theme.palette.common.white]);

    const headingShadow = useMemo(() => {
      return inViewState ? `0 0 10px ${theme.palette.common.white}` : undefined;
    }, [inViewState, theme.palette.common.white]);

    const timelineConnectorClass = useMemo(() => {
      return current ? "timeline-connector-present" : undefined;
    }, [current]);

    const timelineDotColor = useMemo(() => {
      return current ? "info" : undefined;
    }, [current]);

    const [ref] = useInView({
      onChange: setInViewState,
      threshold: 0.8,
    });

    return (
      <TimelineItem ref={ref} sx={{ minHeight: 32 }}>
        <TimelineOppositeContent
          color="textSecondary"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Fade in={inViewState} timeout={750}>
            <span>Started</span>
          </Fade>
          <Typography
            sx={{
              color: headingColor,
              fontSize: 20,
              fontWeight: 900,
              marginBottom: -0.5,
              marginInline: 0.5,
              textShadow: headingShadow,
              transition: "all 1s ease",
            }}
            variant="h3"
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
            companyDescription={companyDescription}
            companyName={companyName}
            endDate={endDate}
            justifyContent={justify}
            languages={languages}
            margin
            shadow={inViewState}
            startDate={startDate}
          />
        </TimelineContent>
      </TimelineItem>
    );
  },
);

WorkExperienceTimelineItem.displayName = "WorkExperienceTimelineItem";

export default WorkExperienceTimelineItem;
