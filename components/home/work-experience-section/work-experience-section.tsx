import CoolText from "@/components/cool-text";
import WorkExperienceTimeline from "@/components/timeline/work-experience-timeline";
import WorkExperienceTimelineItem from "@/components/timeline/work-experience-timeline-item";
import { WorkExperience } from "@/interfaces";
import { FC } from "react";

const WorkExperienceSection: FC<{ workExperiences: WorkExperience[] }> = ({ workExperiences }) => {
    return (
        <>
            <CoolText
                text="Work experience" />
            <div style={{ marginInline: 128 }}>
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