import CoolText from "@/components/cool-text";
import WorkExperienceTimeline from "@/components/timeline/work-experience-timeline";
import WorkExperienceTimelineItem from "@/components/timeline/work-experience-timeline-item";
import { WorkExperience } from "@/interfaces";
import { FC, useState } from "react";
import { useInView } from "react-intersection-observer";

const WorkExperienceSection: FC<{ workExperiences: WorkExperience[] }> = ({ workExperiences }) => {
    const [inViewState, setInViewState] = useState(false);

    const [ref] = useInView({
        onChange: (inView) => setInViewState(inView),
        threshold: 0.25,
    });

    return (
        <>
            <CoolText
                text="Work experience"
                forcedHoverState={inViewState} />
            <div style={{ marginInline: 128 }} ref={ref}>
                <WorkExperienceTimeline items={workExperiences.map((workExperience, index) =>
                    <WorkExperienceTimelineItem key={index}
                        startDate={workExperience.startDate}
                        endDate={workExperience.endDate}
                        companyDescription={workExperience.companyDescription}
                        companyName={workExperience.companyName}
                        languages={workExperience.languages}
                        index={index} />
                )} />
            </div>
        </>
    )
};

export default WorkExperienceSection;