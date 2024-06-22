import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import GitHub from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Project, ProjectLink } from "@/interfaces";
import { FC } from "react";
import { ProjectLinkType } from "@/enums";
import styles from './project-card.module.scss';


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
            <CardContent className={styles.projectCardContent}>
                <Typography variant="h5" component="div">
                    {project.name}
                </Typography>
                <Typography className={styles.projectDescription} color="text.secondary" gutterBottom>
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
            <CardActions className={styles.projectCardActions}>
                {project.links.map((projectLink, index) => {
                    return <ProjectLinkButton key={index} link={projectLink} />
                })}
            </CardActions>
        </Card>

    )
}

export default ProjectCard;