import { WorkProject } from '@/interfaces/workProject.interface';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
import { FC, memo, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const CoolText = dynamic(() => import('@/components/cool-text'));

const WorkProjectsSection: FC<{ projects: WorkProject[] }> = memo(({ projects }) => {
    const [inViewState, setInViewState] = useState(false);
    // const [maxDescriptionHeight, setMaxDescriptionHeight] = useState<number>(0);
    // const [maxTechSectionHeight, setMaxTechSectionHeight] = useState<number>(0);

    const [ref] = useInView({
        onChange: setInViewState,
        threshold: 0.6,
    });

    // const calculateMaxDescriptionHeight = useCallback(() => {
    //     if (projects.length > 0) {
    //         const maxHeight = projects.reduce((maxHeight, project) => {
    //             const descriptionElement = document.getElementById(`description-${project.name}`);
    //             return descriptionElement
    //                 ? Math.max(maxHeight, descriptionElement.clientHeight)
    //                 : maxHeight;
    //         }, 0);

    //         setMaxDescriptionHeight(maxHeight);
    //     }
    // }, [projects]);

    // const calculateMaxTechSectionHeight = useCallback(() => {
    //     if (projects.length > 0) {
    //         const maxHeight = projects.reduce((maxHeight, project) => {
    //             const techSectionElement = document.getElementById(`technologies-${project.name}`);
    //             return techSectionElement
    //                 ? Math.max(maxHeight, techSectionElement.clientHeight)
    //                 : maxHeight;
    //         }, 0);

    //         setMaxTechSectionHeight(maxHeight);
    //     }
    // }, [projects]);

    // const debouncedCalculate = useMemo(
    //     () =>
    //         debounce(() => {
    //             calculateMaxDescriptionHeight();
    //             calculateMaxTechSectionHeight();
    //         }, 300),
    //     [calculateMaxDescriptionHeight, calculateMaxTechSectionHeight]
    // );

    // useEffect(() => {
    //     debouncedCalculate();
    //     window.addEventListener('resize', debouncedCalculate);

    //     return () => {
    //         window.removeEventListener('resize', debouncedCalculate);
    //     };
    // }, [debouncedCalculate]);

    return (
        <>
            <CoolText text="Work Projects" forcedHoverState={inViewState} />
            <div style={{ marginTop: 32, marginInline: 32 }} ref={ref}>
                <Typography variant="h6" component="div" sx={{ fontStyle: 'italic' }}>
                    Still need to confirm some legalities with previous employers before listing
                    projects here. But should be confirmed soon.
                </Typography>
                {/* <Grid container spacing={2}>
                    {projects.map((project, index) => (
                        <Grid key={index} item lg={4} md={6} xs={12}>
                            <WorkProjectCard
                                project={project}
                                maxDescriptionHeight={maxDescriptionHeight}
                                maxTechSectionHeight={maxTechSectionHeight}
                            />
                        </Grid>
                    ))}
                </Grid> */}
            </div>
        </>
    );
});

WorkProjectsSection.displayName = 'WorkProjectsSection';

export default WorkProjectsSection;
