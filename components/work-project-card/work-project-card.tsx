"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import { FC, memo, useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Work-project-card.module.scss";
import WorkProjectCardProps from "./work-project-card.props";

const ProjectLinkButton = dynamic(
  () => import("@/components/project-link-button/project-link-button"),
);

const WorkProjectCard: FC<WorkProjectCardProps> = memo(
  ({ project, maxDescriptionHeight, maxTechSectionHeight }) => {
    const [inViewState, setInViewState] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);

    const { ref } = useInView({
      onChange: setInViewState,
      threshold: 1,
    });

    const smallScreenListener = useCallback(() => {
      const smallWidth = window.screen.width < 769;
      if (smallScreen !== smallWidth) {
        setSmallScreen(smallWidth);
      }
    }, [smallScreen]);

    useEffect(() => {
      smallScreenListener();
      window.addEventListener("resize", smallScreenListener);

      return () => {
        window.removeEventListener("resize", smallScreenListener);
      };
    }, [smallScreenListener]);

    return (
      <Card
        className={`${styles.projectCard} ${inViewState && smallScreen ? styles.forcedHover : ""}`}
        ref={ref}
        variant="outlined"
      >
        <CardContent className={styles.projectCardContent}>
          <Typography component="div" variant="h5">
            {project.name}
          </Typography>
          <Typography
            className={styles.projectDescription}
            color="text.secondary"
            gutterBottom
            id={`description-${project.name}`}
            style={{ minHeight: maxDescriptionHeight }}
          >
            {project.description}
          </Typography>
          <Grid
            container
            id={`technologies-${project.name}`}
            spacing={0.5}
            style={{ minHeight: maxTechSectionHeight }}
          >
            {project.technologies.map((technology, index) => (
              <Grid key={index} size={{ xs: "auto" }}>
                <Chip label={technology} size="small" variant="outlined" />
              </Grid>
            ))}
          </Grid>
        </CardContent>
        {project.links && (
          <CardActions className={styles.projectCardActions}>
            {Array.isArray(project.links) ? (
              project.links.map((link, index) => (
                <ProjectLinkButton
                  key={`project-link-${index}`}
                  link={link}
                  name={project.name}
                />
              ))
            ) : (
              <ProjectLinkButton link={project.links} name={project.name} />
            )}
          </CardActions>
        )}
      </Card>
    );
  },
);

WorkProjectCard.displayName = "WorkProjectCard";

export default WorkProjectCard;
