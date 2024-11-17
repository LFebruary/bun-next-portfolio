import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import styles from './work-project-card.module.scss';
import { useInView } from 'react-intersection-observer';
import ProjectLinkButton from '../project-card/project-link-button';
import WorkProjectCardProps from './work-project-card.props';

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
                    <Grid
                        id={`technologies-${project.name}`}
                        container
                        spacing={0.5}
                        style={{ minHeight: maxTechSectionHeight }}
                    >
                        {project.technologies.map((technology, index) => (
                            <Grid key={index} item>
                                <Chip size="small" label={technology} variant="outlined" />
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
                                    name={project.name}
                                    link={link}
                                />
                            ))
                        ) : (
                            <ProjectLinkButton name={project.name} link={project.links} />
                        )}
                    </CardActions>
                )}
            </Card>
        );
    }
);

WorkProjectCard.displayName = 'WorkProjectCard';

export default WorkProjectCard;
