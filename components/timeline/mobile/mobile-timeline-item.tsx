import { WorkExperience } from "@/interfaces";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { FC, Fragment } from "react";
import styles from './mobile-timeline.module.scss';
import { DateFormatter } from "@/utils";

const MobileTimelineItem: FC<{ experience: WorkExperience }> = ({ experience }) => {
    return (
        <li className={styles.timelineEvent}>
            <label className={styles.timelineEventIcon}></label>
            <div className={styles.timelineEventCopy}>
                <Typography variant="h5" component="div">
                    {experience.companyName}
                </Typography>
                <Typography variant="body1" component="div">
                    {experience.companyDescription}
                </Typography>
                <div style={{ marginBlock: .5, marginBlockStart: 2 }}>
                    {experience.languages && experience.languages.map((language, index) => {
                        return (
                            <Fragment key={index}>
                                <Typography variant="caption" component="div" sx={{ paddingTop: 1, marginInline: .5, fontWeight: 900 }}>
                                    {language.languageName}
                                </Typography>
                                <div key={language.languageName} style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    marginInline: 4,
                                }}>

                                    {language.frameworks.map((framework) => {
                                        return (
                                            <Chip
                                                size="small"
                                                key={framework}
                                                label={framework}
                                                sx={{ margin: .25, marginBlockEnd: .75 }}
                                            />
                                        );
                                    })}
                                </div>
                            </Fragment>
                        );
                    })}
                </div>
                <p className={styles.timelineEventThumbnail}>{DateFormatter.formatDate(experience.startDate)} - {experience.endDate ? DateFormatter.formatDate(experience.endDate) : "Present"}</p>
            </div>
        </li>
    );
}

export default MobileTimelineItem;