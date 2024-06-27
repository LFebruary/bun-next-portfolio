import CoolText from "@/components/cool-text";
import MobileTimeline from "@/components/timeline/mobile/mobile-timeline";
import WorkExperienceTimeline from "@/components/timeline/work-experience-timeline";
import WorkExperienceTimelineItem from "@/components/timeline/work-experience-timeline-item";
import { WorkExperience } from "@/interfaces";
import { FC, useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const WorkExperienceSection: FC<{ workExperiences: WorkExperience[] }> = ({ workExperiences }) => {
    const [inViewState, setInViewState] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);

    const [ref] = useInView({
        onChange: (inView) => setInViewState(inView),
        threshold: 0.4,
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
        <>
            <CoolText
                text="Work experience"
                forcedHoverState={inViewState} />
            <div style={{ marginInline: 32 }} ref={ref}>
                {smallScreen && <MobileTimeline experiences={workExperiences} />}
                {!smallScreen &&
                    <WorkExperienceTimeline items={workExperiences.map((workExperience, index) =>
                        <WorkExperienceTimelineItem
                            key={`${index}-${workExperience.companyName.replace(' ', '')}`}
                            startDate={workExperience.startDate}
                            endDate={workExperience.endDate}
                            companyDescription={workExperience.companyDescription}
                            companyName={workExperience.companyName}
                            languages={workExperience.languages}
                            index={index} />
                    )}/>
                }
            </div>
        </>
    )
};

export default WorkExperienceSection;