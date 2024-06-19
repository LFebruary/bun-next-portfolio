import CoolText from "@/components/cool-text";
import { ProjectLinkType } from "@/enums";
import { Project, ProjectLink } from "@/interfaces";
import GitHub from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
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
                <IconButton href={link.link} aria-label="Github repository">
                    <GitHub />
                </IconButton>
            );
    }

    return <></>;
};

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    {project.name}
                </Typography>
                <Typography sx={{ fontSize: 14, minHeight: 128 }} color="text.secondary" gutterBottom>
                    {project.description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                    {project.technologies.map((technology, index) => {
                        return (
                            <Chip size="small" key={index} label={technology} variant="outlined" />
                        );
                    })}
                </Stack>
            </CardContent>
            <CardActions>
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
            <div style={{ marginInline: 128, marginTop: 32 }} ref={ref}>
                <Grid container spacing={2}>
                    {projects.map((project, index) => {
                        return (
                            <Grid key={index} item xs={4}>
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