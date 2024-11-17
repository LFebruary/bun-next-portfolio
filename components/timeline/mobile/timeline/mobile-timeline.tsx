import { FC, memo, useMemo } from 'react';
import styles from '../mobile-timeline.module.scss';
import MobileTimelineItem from '../timeline-item/mobile-timeline-item';
import MobileTimelineProps from './mobile-timeline.props';

const EmptyTimelineItem = memo(() => (
    <li className={styles.timelineEvent}>
        <label className={styles.timelineEventIcon} aria-hidden="true" />
    </li>
));

EmptyTimelineItem.displayName = 'EmptyTimelineNode';

const MobileTimeline: FC<MobileTimelineProps> = memo(({ experiences }) => {
    const timelineExperiences = useMemo(
        () =>
            experiences.map((experience) => ({
                ...experience,
                key: `${experience.companyName}-${experience.startDate}`, // Better key than index
            })),
        [experiences]
    );

    if (!experiences.length) {
        return null;
    }

    return (
        <ul className={styles.timeline} role="list">
            {timelineExperiences.map(({ key, ...experience }) => (
                <MobileTimelineItem key={key} experience={experience} />
            ))}
            <EmptyTimelineItem />
        </ul>
    );
});

MobileTimeline.displayName = 'MobileTimeline';

export default MobileTimeline;
