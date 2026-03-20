"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import { PersonalProject } from "@/interfaces";
import styles from "./project-card.module.scss";

const ProjectLinkButton = dynamic(
  () => import("@/components/project-link-button/project-link-button"),
);

const ProjectCard: FC<{
  project: PersonalProject;
  maxDescriptionHeight: number;
}> = ({ project, maxDescriptionHeight }) => {
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

  const projectLinks = useMemo(() => {
    if (!project.links) return [];

    const flattenedLinks = Array.isArray(project.links)
      ? project.links
      : [project.links];

    return flattenedLinks.map((projectLink, index) => (
      <ProjectLinkButton key={index} link={projectLink} name={project.name} />
    ));
  }, [project.links, project.name]);

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
        <Grid container spacing={0.5}>
          {project.technologies.map((technology, index) => (
            <Grid key={index} size={{ xs: "auto" }}>
              <Chip label={technology} size="small" variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <CardActions className={styles.projectCardActions}>
        {...projectLinks}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
