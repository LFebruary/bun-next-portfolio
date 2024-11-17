import CoolText from '@/components/cool-text';
import ProjectCard from '@/components/project-card';
import debounce from '@/utils/debounce';
import Grid from '@mui/material/Grid';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PersonalProjectsSectionProps from './personal-projects-section.props';

const PersonalProjectsSection: FC<PersonalProjectsSectionProps> = memo(({ projects }) => {
    const [inViewState, setInViewState] = useState(false);
    const [maxDescriptionHeight, setMaxDescriptionHeight] = useState<number>(0);

    const [ref] = useInView({
        onChange: setInViewState,
        threshold: 0.5,
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
            }, 300),
        [calculateMaxDescriptionHeight]
    );

    const projectsGrid = useMemo(() => {
        return (
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
        );
    }, [projects, maxDescriptionHeight]);

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
            <div style={{ marginInline: 32, marginBlock: 32 }} ref={ref}>
                {projectsGrid}
            </div>
        </>
    );
});

PersonalProjectsSection.displayName = 'PersonalProjectsSection';

export default PersonalProjectsSection;
