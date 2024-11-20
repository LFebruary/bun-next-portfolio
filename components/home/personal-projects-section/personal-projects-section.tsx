import debounce from '@/utils/debounce';
import Grid from '@mui/material/Grid';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PersonalProjectsSectionProps from './personal-projects-section.props';
import dynamic from 'next/dynamic';

const CoolText = dynamic(() => import('@/components/cool-text'));
const ProjectCard = dynamic(() => import('@/components/project-card'));

/**
 * PersonalProjectsSection component displays a list of personal projects with hover effects.
 * It calculates the maximum description height for uniform project card layout, uses debouncing
 * for resize events, and triggers hover effects based on the visibility of the section in the viewport.
 *
 * @param {PersonalProjectsSectionProps} props - The props containing the list of personal projects.
 *
 * @returns {JSX.Element} A section containing a list of project cards with dynamic layout adjustments.
 */
const PersonalProjectsSection: FC<PersonalProjectsSectionProps> = memo(({ projects }) => {
    const [inViewState, setInViewState] = useState(false);
    const [maxDescriptionHeight, setMaxDescriptionHeight] = useState<number>(0);

    const [ref] = useInView({
        onChange: setInViewState,
        threshold: 0.5,
    });

    /**
     * Calculates the maximum description height across all project descriptions
     * to ensure all project cards align correctly.
     */
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

    /**
     * Debounced version of the calculateMaxDescriptionHeight function to optimize performance
     * during window resize events. It delays the execution by 300ms.
     */
    const debouncedCalculate = useMemo(
        () =>
            debounce(() => {
                calculateMaxDescriptionHeight();
            }, 300),
        [calculateMaxDescriptionHeight]
    );

    /**
     * Memoized Grid layout for project cards to avoid unnecessary re-renders.
     * It maps over the projects array and renders each ProjectCard component inside a Grid item.
     */
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
