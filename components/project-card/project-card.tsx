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
import Link from "next/link";

const ProjectLinkButton: FC<{ link: ProjectLink }> = ({ link }) => {
    switch (link.linkType) {
        case ProjectLinkType.github:
            return (
                <IconButton target="_blank" href={link.link} aria-label="Github repository" size="large">
                    <GitHub />
                </IconButton>
            );
        default:
            return null;
    }
};

const ProjectCard: FC<{ project: Project; maxDescriptionHeight: number }> = ({ project, maxDescriptionHeight }) => {
    const githubLink = project.links.find((link) => link.linkType === ProjectLinkType.github);

    const card = (
        <Card className={styles.projectCard} variant="outlined">
            <CardContent className={styles.projectCardContent}>
                <Typography variant="h5" component="div">
                    {project.name}
                </Typography>
                <Typography
                    id={`description-${project.name}`}
                    className={styles.projectDescription}
                    style={{ minHeight: maxDescriptionHeight }}
                    color="text.secondary"
                    gutterBottom
                >
                    {project.description}
                </Typography>
                <Grid container spacing={0.5}>
                    {project.technologies.map((technology, index) => (
                        <Grid key={index} item>
                            <Chip size="small" label={technology} variant="outlined" />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
            <CardActions className={styles.projectCardActions}>
                {project.links.map((projectLink, index) => (
                    <ProjectLinkButton key={index} link={projectLink} />
                ))}
            </CardActions>
        </Card>
    );

    return card;
    // if (githubLink) {
    //     return (
    //         <Link className={styles.customLink} href={githubLink.link} target="_blank">
    //             {card}
    //         </Link>
    //     );
    // } else {
        
    // }
};

export default ProjectCard;
