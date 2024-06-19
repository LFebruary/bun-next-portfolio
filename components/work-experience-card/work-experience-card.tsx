import { WorkExperience } from "@/interfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

interface WorkExperienceCardProps extends WorkExperience {
    minHeight?: boolean;
    margin?: boolean;
    maxWidth?: boolean;
    justifyContent: "center" | "end" | "flex-end" | "flex-start" | "start" | undefined;
    shadow?: boolean;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
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
}: WorkExperienceCardProps) => {
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
            </CardContent>
        </Card >
    );
};

export default WorkExperienceCard;