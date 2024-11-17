import { ProgrammingLanguage, WorkExperience } from '@/interfaces';
import { FC, memo, useMemo } from 'react';
import Typography from '@mui/material/Typography';
import styles from '../mobile-timeline.module.scss';
import { DateFormatter } from '@/utils';
import MobileTimelineLanguageSection from '../timeline-language-section';

// Utility function for sorting languages
const sortLanguages = (languages: ProgrammingLanguage[] | undefined) => {
    if (!languages) return [];

    return [...languages]
        .sort((a, b) => {
            if (a.languageName.toLowerCase() === 'misc') return 1;
            if (b.languageName.toLowerCase() === 'misc') return -1;
            return a.languageName.localeCompare(b.languageName);
        })
        .map((lang) => ({
            ...lang,
            frameworks: lang.frameworks?.sort((a, b) => a.localeCompare(b)),
        }));
};

const MobileTimelineItem: FC<{ experience: WorkExperience }> = memo(({ experience }) => {
    // Memoize sorted languages to prevent unnecessary re-sorting
    const sortedLanguages = useMemo(
        () => sortLanguages(experience.languages),
        [experience.languages]
    );

    const dateRange = useMemo(
        () =>
            `${DateFormatter.formatDate(experience.startDate)} - ${
                experience.endDate ? DateFormatter.formatDate(experience.endDate) : 'Present'
            }`,
        [experience.startDate, experience.endDate]
    );

    return (
        <li className={styles.timelineEvent}>
            <label className={styles.timelineEventIcon} />
            <div className={styles.timelineEventCopy}>
                <p className={styles.timelineEventThumbnail}>{dateRange}</p>
                <Typography variant="h5" component="div">
                    {experience.companyName}
                </Typography>
                <Typography variant="body1" component="div">
                    {experience.companyDescription}
                </Typography>

                <div style={{ marginBlock: 0.5, marginBlockStart: 2 }}>
                    {sortedLanguages.map((language, index) => (
                        <MobileTimelineLanguageSection
                            key={`${language.languageName}-${index}`}
                            languageName={language.languageName}
                            frameworks={language.frameworks}
                        />
                    ))}
                </div>
            </div>
        </li>
    );
});

MobileTimelineItem.displayName = 'MobileTimelineItem';

export default MobileTimelineItem;
