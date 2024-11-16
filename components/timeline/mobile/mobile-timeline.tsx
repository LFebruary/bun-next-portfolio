import { WorkExperience } from '@/interfaces';
import { FC } from 'react';
import styles from './mobile-timeline.module.scss';
import MobileTimelineItem from './mobile-timeline-item';

const MobileTimeline: FC<{ experiences: WorkExperience[] }> = ({ experiences }) => {
    return (
        <ul className={styles.timeline}>
            {experiences.map((experience, index) => (
                <MobileTimelineItem key={index} experience={experience} />
            ))}
            <li className={styles.timelineEvent}>
                <label className={styles.timelineEventIcon}></label>
            </li>
        </ul>
    );
};

export default MobileTimeline;
