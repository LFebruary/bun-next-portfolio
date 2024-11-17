import { WorkExperience } from '@/interfaces';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { FC, Fragment } from 'react';
import styles from './mobile-timeline.module.scss';
import { DateFormatter } from '@/utils';

const MobileTimelineItem: FC<{ experience: WorkExperience }> = ({ experience }) => {
    if (experience.languages) {
        experience.languages.sort((a, b) => {
            if (a.languageName.toLowerCase() === 'misc') return 1;
            if (b.languageName.toLowerCase() === 'misc') return -1;
            return a.languageName.localeCompare(b.languageName);
        });
        for (const language of experience.languages) {
            if (language.frameworks) {
                language.frameworks.sort((a, b) => a.localeCompare(b));
            }
        }
    }

    return (
        <li className={styles.timelineEvent}>
            <label className={styles.timelineEventIcon}></label>
            <div className={styles.timelineEventCopy}>
                <p className={styles.timelineEventThumbnail}>
                    {DateFormatter.formatDate(experience.startDate)} -{' '}
                    {experience.endDate ? DateFormatter.formatDate(experience.endDate) : 'Present'}
                </p>
                <Typography variant="h5" component="div">
                    {experience.companyName}
                </Typography>
                <Typography variant="body1" component="div">
                    {experience.companyDescription}
                </Typography>
                <div style={{ marginBlock: 0.5, marginBlockStart: 2 }}>
                    {experience.languages &&
                        experience.languages.map((language, index) => {
                            return language.frameworks ? (
                                <Fragment key={index}>
                                    <Typography
                                        variant="caption"
                                        component="div"
                                        sx={{ paddingTop: 1, marginInline: 0.5, fontWeight: 900 }}
                                    >
                                        {language.languageName}
                                    </Typography>
                                    <div
                                        key={language.languageName}
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            flexDirection: 'row',
                                            justifyContent: 'start',
                                            alignItems: 'center',
                                            marginInline: 4,
                                        }}
                                    >
                                        {language.frameworks.map((framework) => {
                                            return (
                                                <Chip
                                                    size="small"
                                                    key={framework}
                                                    label={framework}
                                                    sx={{ margin: 0.25, marginBlockEnd: 0.75 }}
                                                />
                                            );
                                        })}
                                    </div>
                                </Fragment>
                            ) : (
                                <Fragment key={index}>
                                    <Typography
                                        variant="caption"
                                        component="div"
                                        sx={{ paddingTop: 1, marginInline: 0.5, fontWeight: 900 }}
                                    ></Typography>
                                    <div
                                        key={language.languageName}
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            flexDirection: 'row',
                                            justifyContent: 'start',
                                            alignItems: 'center',
                                            marginInline: 4,
                                        }}
                                    >
                                        <Chip
                                            size="small"
                                            key={language.languageName}
                                            label={language.languageName}
                                            sx={{ margin: 0.25, marginBlockEnd: 0.75 }}
                                        />
                                    </div>
                                </Fragment>
                            );
                        })}
                </div>
            </div>
        </li>
    );
};

export default MobileTimelineItem;
