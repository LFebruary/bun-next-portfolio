import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { PersonalProject } from '@/interfaces';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import styles from './project-card.module.scss';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

const ProjectLinkButton = dynamic(() => import('@/components/project-card/project-link-button'));

const ProjectCard: FC<{ project: PersonalProject; maxDescriptionHeight: number }> = ({
    project,
    maxDescriptionHeight,
}) => {
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

        const flattenedLinks = Array.isArray(project.links) ? project.links : [project.links];

        return flattenedLinks.map((projectLink, index) => (
            <ProjectLinkButton key={index} link={projectLink} name={project.name} />
        ));
    }, [project.links, project.name]);

    useEffect(() => {
        smallScreenListener();
        window.addEventListener('resize', smallScreenListener);

        return () => {
            window.removeEventListener('resize', smallScreenListener);
        };
    }, [smallScreenListener]);

    return (
        <Card
            ref={ref}
            className={`${styles.projectCard} ${inViewState && smallScreen ? styles.forcedHover : ''}`}
            variant="outlined"
        >
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
            <CardActions className={styles.projectCardActions}>{...projectLinks}</CardActions>
        </Card>
    );
};

export default ProjectCard;
