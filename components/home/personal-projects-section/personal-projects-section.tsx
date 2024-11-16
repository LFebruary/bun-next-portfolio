import CoolText from '@/components/cool-text';
import ProjectCard from '@/components/project-card';
import { Project } from '@/interfaces';
import Grid from '@mui/material/Grid';
import { FC, useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ProjectsSection: FC<{ projects: Project[] }> = ({ projects }) => {
    const [inViewState, setInViewState] = useState(false);
    const [maxDescriptionHeight, setMaxDescriptionHeight] = useState<number>(0);
    const [ref] = useInView({
        onChange: setInViewState,
        threshold: 0.6,
    });

    // Debounce function to delay execution until after resizing stops
    const debounce = (func: () => void, delay: number) => {
        let timeoutId: NodeJS.Timeout;
        return () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(func, delay);
        };
    };

    const calculateMaxDescriptionHeight = useCallback(() => {
        if (projects.length > 0) {
            // Calculate max height of all descriptions
            const maxHeight = projects.reduce((maxHeight, project) => {
                const descriptionElement = document.getElementById(`description-${project.name}`);
                if (descriptionElement) {
                    const descriptionHeight = descriptionElement.clientHeight;
                    return descriptionHeight > maxHeight ? descriptionHeight : maxHeight;
                }
                return maxHeight;
            }, 0);

            // Set max height state
            setMaxDescriptionHeight(maxHeight);
        }
    }, [projects]);

    // Wrap the calculation in a debounced function
    const debouncedCalculate = debounce(calculateMaxDescriptionHeight, 1000);

    useEffect(() => {
        debouncedCalculate();
        window.addEventListener('resize', debouncedCalculate);

        return () => {
            window.removeEventListener('resize', debouncedCalculate);
        };
    }, [projects, debouncedCalculate]);

    return (
        <>
            <CoolText text="Personal Projects" forcedHoverState={inViewState} />
            <div style={{ marginTop: 32, marginInline: 32 }} ref={ref}>
                <Grid container spacing={2}>
                    {projects.map((project, index) => (
                        <Grid key={index} item lg={4} md={6} xs={12}>
                            <ProjectCard
                                project={project}
                                maxDescriptionHeight={maxDescriptionHeight}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
};

export default ProjectsSection;
