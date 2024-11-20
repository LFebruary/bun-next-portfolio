import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import { useInView } from 'react-intersection-observer';
import useMediaQuery from '@/hooks/useMediaQuery';
import WorkExperienceSectionProps from './work-experience-section.props';

const CoolText = dynamic(() => import('@/components/cool-text'));

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

/**
 * WorkExperienceSection component displays the user's work experience in a timeline format.
 * The layout adapts based on the screen size, showing a mobile-friendly version of the timeline
 * for smaller screens and a full version for larger screens. It also triggers hover effects
 * for the section title when the section comes into view.
 *
 * @param {WorkExperienceSectionProps} props - The props containing the list of work experiences.
 *
 * @returns {JSX.Element} A section containing a work experience timeline that adapts to the screen size.
 */
const WorkExperienceSection: FC<WorkExperienceSectionProps> = memo(({ workExperiences }) => {
    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    // Custom hook to check if the screen size matches the mobile viewport (max width: 768px)
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
