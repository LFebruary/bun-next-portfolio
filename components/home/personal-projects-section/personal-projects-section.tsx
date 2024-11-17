import CoolText from '@/components/cool-text';
import ProjectCard from '@/components/project-card';
import { Project } from '@/interfaces';
import Grid from '@mui/material/Grid';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ProjectsSection: FC<{ projects: Project[] }> = ({ projects }) => {
    const [inViewState, setInViewState] = useState(false);
    const [maxDescriptionHeight, setMaxDescriptionHeight] = useState<number>(0);

    const [ref] = useInView({
        onChange: setInViewState,
        threshold: 0.6,
    });

    const calculateMaxDescriptionHeight = useCallback(() => {
        if (projects.length > 0) {
            const maxHeight = projects.reduce((maxHeight, project) => {
                const descriptionElement = document.getElementById(`description-${project.name}`);
                return descriptionElement
                    ? Math.max(maxHeight, descriptionElement.clientHeight)
                    : maxHeight;
            }, 0);

            setMaxDescriptionHeight(maxHeight);
        }
    }, [projects]);

    const debouncedCalculate = useMemo(
        () =>
            debounce(() => {
                calculateMaxDescriptionHeight();
            }, 300), // Shortened debounce delay to make UI more responsive
        [calculateMaxDescriptionHeight]
    );

    useEffect(() => {
        debouncedCalculate();
        window.addEventListener('resize', debouncedCalculate);

        return () => {
            window.removeEventListener('resize', debouncedCalculate);
        };
    }, [debouncedCalculate]);

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

function debounce<T extends (...args: unknown[]) => void>(func: T, delay: number): T {
    let timeoutId: ReturnType<typeof setTimeout>;
    return ((...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    }) as T;
}

export default ProjectsSection;
