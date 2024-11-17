import dynamic from 'next/dynamic';
import { FC, useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CoolText from '@/components/cool-text';
import type { WorkExperience } from '@/interfaces';
import MobileTimelineItem from '@/components/timeline/mobile/mobile-timeline-item';

// Dynamically import components that are conditionally rendered
const MobileTimeline = dynamic(() => import('@/components/timeline/mobile/mobile-timeline'), {
    ssr: false,
});

const WorkExperienceTimeline = dynamic(
    () => import('@/components/timeline/work-experience-timeline'),
    { ssr: false }
);

const WorkExperienceTimelineItem = dynamic(
    () => import('@/components/timeline/work-experience-timeline-item'),
    { ssr: false }
);

// Create custom media query hook
const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        const updateMatch = (e: MediaQueryListEvent | MediaQueryList) => {
            setMatches(e.matches);
        };

        // Initial check
        updateMatch(media);

        // Add listener
        if (typeof media.addEventListener === 'function') {
            media.addEventListener('change', updateMatch);
            return () => media.removeEventListener('change', updateMatch);
        } else {
            // Older browsers
            media.addListener(updateMatch);
            return () => media.removeListener(updateMatch);
        }
    }, [query]);

    return matches;
};

interface WorkExperienceSectionProps {
    workExperiences: WorkExperience[];
}

const WorkExperienceSection: FC<WorkExperienceSectionProps> = ({ workExperiences }) => {
    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    // Use media query instead of screen width
    const isMobile = useMediaQuery('(max-width: 768px)');

    // Memoize timeline items to prevent unnecessary re-renders
    const timelineItems = useMemo(
        () =>
            workExperiences.map((workExperience, index) =>
                isMobile ? (
                    <MobileTimelineItem
                        key={`${workExperience.companyName.replace(/\s+/g, '')}-${index}`}
                        experience={workExperience}
                    />
                ) : (
                    <WorkExperienceTimelineItem
                        key={`${workExperience.companyName.replace(/\s+/g, '')}-${index}`}
                        startDate={workExperience.startDate}
                        endDate={workExperience.endDate}
                        companyDescription={workExperience.companyDescription}
                        companyName={workExperience.companyName}
                        languages={workExperience.languages}
                        index={index}
                    />
                )
            ),
        [workExperiences, isMobile]
    );

    return (
        <section style={{ marginInline: 32 }}>
            <CoolText text="Work experience" forcedHoverState={inView} />
            <div ref={ref}>
                {isMobile ? (
                    <MobileTimeline experiences={workExperiences} />
                ) : (
                    <WorkExperienceTimeline items={timelineItems} />
                )}
            </div>
        </section>
    );
};

// Add display name for debugging
WorkExperienceSection.displayName = 'WorkExperienceSection';

export default WorkExperienceSection;
