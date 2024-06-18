import { Card, CardContent, Typography, Chip } from "@mui/material";
import moment from "moment";

export interface WorkExperienceProps {
    startDate: Date;
    endDate?: Date | undefined;
    companyName: string;
    companyDescription: string;
    languages: Language[] | undefined;
}

interface Language {
    languageName: string;
    frameworks: string[];
}

export interface WorkExperienceComponentProps extends WorkExperienceProps {
    minHeight?: boolean;
    margin?: boolean;
    maxWidth?: boolean;
    justifyContent: "center" | "end" | "flex-end" | "flex-start" | "start" | undefined;
    shadow?: boolean;
}

const formatDate = (date: Date) => (moment(date)).format('DD MMM YYYY');

export const WorkExperience: React.FC<WorkExperienceComponentProps> = ({
    startDate,
    companyDescription,
    endDate,
    companyName,
    minHeight,
    margin,
    maxWidth,
    languages,
    justifyContent,
    shadow,
}: WorkExperienceComponentProps) => {
    const current = !endDate;

    let classes = "";

    if (current && shadow)
        classes += "present";
    else if (shadow)
        classes += " applyShadow";

    return (
        <Card
            className={classes}
            sx={{ minWidth: 275, marginBlock: margin ? 2 : undefined, maxWidth: maxWidth ? 256 : undefined }} variant="outlined">
            <CardContent>
                <div style={{ minHeight: minHeight ? 160 : undefined }}>
                    <Typography variant="h5" component="div">
                        {companyName}
                    </Typography>
                    <Typography variant="body1" component="div">
                        {companyDescription}
                    </Typography>
                </div>
                <div style={{ marginBlock: .5, marginBlockStart: 2 }}>
                    {languages && languages.map((language => {
                        return (<>
                            <Typography variant="caption" component="div" sx={{ paddingTop: 1, marginInline: .5, fontWeight: 900 }}>
                                {language.languageName}
                            </Typography>
                            <div key={language.languageName} style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                flexDirection: 'row',
                                justifyContent: justifyContent,
                                alignItems: 'center',
                                marginInline: 4,
                            }}>

                                {language.frameworks.map((framework) => {
                                    return (
                                        <Chip
                                            size="small"
                                            key={framework}
                                            label={framework}
                                            sx={{ margin: .25, marginBlockEnd: .75 }} // Adjust margin as needed
                                        />
                                    );
                                })}

                            </div>
                        </>
                        );
                    }))}
                </div>


                {/* {endDate &&
                    <Typography>
                        {formatDate(startDate)} - {formatDate(endDate)}
                    </Typography>
                }

                {!endDate &&
                    <Typography>
                        {formatDate(startDate)} - Present
                    </Typography>
                } */}
            </CardContent>
        </Card >
    );
};