import Typography from "@mui/material/Typography";
import { FC, memo, useMemo } from "react";
import { ProgrammingLanguage, WorkExperience } from "@/interfaces";
import DateFormatter from "../../../../utils/dateFormatter.util";
import styles from "../mobile-timeline.module.scss";
import MobileTimelineLanguageSection from "../timeline-language-section/mobile-timeline-language-section";

// Utility function for sorting languages
const sortLanguages = (languages: ProgrammingLanguage[] | undefined) => {
    if (!languages) return [];

    return [...languages]
        .sort((a, b) => {
            if (a.languageName.toLowerCase() === "misc") return 1;
            if (b.languageName.toLowerCase() === "misc") return -1;
            return a.languageName.localeCompare(b.languageName);
        })
        .map((lang) => ({
            ...lang,
            frameworks: lang.frameworks?.sort((a, b) => a.localeCompare(b)),
        }));
};

const MobileTimelineItem: FC<{ experience: WorkExperience }> = memo(
    ({ experience }) => {
        // Memoize sorted languages to prevent unnecessary re-sorting
        const sortedLanguages = useMemo(
            () => sortLanguages(experience.languages),
            [experience.languages],
        );

        const dateRange = useMemo(
            () =>
                `${DateFormatter.formatDate(experience.startDate)} - ${
                    experience.endDate
                        ? DateFormatter.formatDate(experience.endDate)
                        : "Present"
                }`,
            [experience.startDate, experience.endDate],
        );

        return (
            <li className={styles.timelineEvent}>
                <label className={styles.timelineEventIcon} />
                <div className={styles.timelineEventCopy}>
                    <p className={styles.timelineEventThumbnail}>{dateRange}</p>
                    <Typography component="div" variant="h5">
                        {experience.companyName}
                    </Typography>
                    <Typography component="div" variant="body1">
                        {experience.companyDescription}
                    </Typography>

                    <div style={{ marginBlock: 0.5, marginBlockStart: 2 }}>
                        {sortedLanguages.map((language, index) => (
                            <MobileTimelineLanguageSection
                                frameworks={language.frameworks}
                                key={`${language.languageName}-${index}`}
                                languageName={language.languageName}
                            />
                        ))}
                    </div>
                </div>
            </li>
        );
    },
);

MobileTimelineItem.displayName = "MobileTimelineItem";

export default MobileTimelineItem;
