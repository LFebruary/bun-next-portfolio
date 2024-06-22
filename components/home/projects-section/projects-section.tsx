import CoolText from "@/components/cool-text";
import ProjectCard from "@/components/project-card";
import { Project } from "@/interfaces";
import Grid from "@mui/material/Grid";
import { FC, useState } from "react";
import { useInView } from "react-intersection-observer";

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
            <div style={{ marginTop: 32, marginInline: 32 }} ref={ref}>
                <Grid container spacing={2}>
                    {projects.map((project, index) => {
                        return (
                            <Grid key={index} item lg={4} md={6} xs={12}>
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