import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import { useInView } from 'react-intersection-observer';
import CoolText from '@/components/cool-text';
import useMediaQuery from '@/hooks/useMediaQuery';
import WorkExperienceSectionProps from './work-experience-section.props';

const MobileTimeline = dynamic(
    () => import('@/components/timeline/mobile/timeline/mobile-timeline'),
    {
        ssr: false,
    }
);

const WorkExperienceTimeline = dynamic(
    () => import('@/components/timeline/work-experience-timeline'),
    { ssr: false }
);

const WorkExperienceSection: FC<WorkExperienceSectionProps> = memo(({ workExperiences }) => {
    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <section style={{ marginInline: 32 }}>
            <CoolText text="Work experience" forcedHoverState={inView} />
            <div ref={ref}>
                {isMobile ? (
                    <MobileTimeline experiences={workExperiences} />
                ) : (
                    <WorkExperienceTimeline experiences={workExperiences} />
                )}
            </div>
        </section>
    );
});

WorkExperienceSection.displayName = 'WorkExperienceSection';

export default WorkExperienceSection;
