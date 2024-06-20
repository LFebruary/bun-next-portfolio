import CoolText from "@/components/cool-text";
import { ProjectLinkType } from "@/enums";
import { Project, ProjectLink } from "@/interfaces";
import GitHub from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC, Fragment, useState } from "react";
import { useInView } from "react-intersection-observer";

const ProjectLinkButton: FC<{ link: ProjectLink }> = ({ link }) => {
    switch (link.linkType) {
        case ProjectLinkType.github:
            return (
                <IconButton target="_blank" href={link.link} aria-label="Github repository" size="large">
                    <GitHub />
                </IconButton>
            );
    }

    return <></>;
};

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
    return (
        <Card variant="outlined">
            <CardContent sx={{ paddingBlockEnd: .25 }}>
                <Typography variant="h5" component="div">
                    {project.name}
                </Typography>
                <Typography sx={{ fontSize: 14, minHeight: 128 }} color="text.secondary" gutterBottom>
                    {project.description}
                </Typography>
                <Grid container spacing={.5}>
                    {project.technologies.map((technology, index) => {
                        return (
                            <Grid key={index} item>
                                <Chip size="small" label={technology} variant="outlined" />
                            </Grid>
                        );
                    })}
                </Grid>
            </CardContent>
            <CardActions sx={{ paddingBlockStart: 0 }}>
                {project.links.map((projectLink, index) => {
                    return <ProjectLinkButton key={index} link={projectLink} />
                })}
            </CardActions>
        </Card>

    )
}

const ProjectsSection: FC<{ projects: Project[] }> = ({ projects }) => {
    const [inViewState, setInViewState] = useState(false);

    const [ref] = useInView({
        onChange: (inView) => setInViewState(inView),
        threshold: 0.6,
    });

    return (
        <>
            <CoolText
                text="Personal Projects"
                forcedHoverState={inViewState} />
            <div style={{ marginTop: 32, marginInline: 32 }} ref={ref}>
                <Grid container spacing={2}>
                    {projects.map((project, index) => {
                        return (
                            <Grid key={index} item lg={4} md={6} xs={12}>
                                <ProjectCard project={project} />
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </>
    );
}

export default ProjectsSection;