import { WorkExperience } from '@/interfaces';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { FC, Fragment } from 'react';

interface WorkExperienceCardProps extends WorkExperience {
    minHeight?: boolean;
    margin?: boolean;
    maxWidth?: boolean;
    justifyContent: 'center' | 'end' | 'flex-end' | 'flex-start' | 'start' | undefined;
    shadow?: boolean;
}

const WorkExperienceCard: FC<WorkExperienceCardProps> = ({
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

    let classes = '';

    if (current && shadow) classes += 'present';
    else if (shadow) classes += ' applyShadow';

    if (languages) {
        languages.sort((a, b) => {
            if (a.languageName.toLowerCase() === 'misc') return 1;
            if (b.languageName.toLowerCase() === 'misc') return -1;
            return a.languageName.localeCompare(b.languageName);
        });
        for (const language of languages) {
            if (language.frameworks) {
                language.frameworks.sort((a, b) => a.localeCompare(b));
            }
        }
    }

    return (
        <Card
            key={companyName.replace(' ', '')}
            className={classes}
            sx={{
                minWidth: 275,
                marginBlock: margin ? 2 : undefined,
                maxWidth: maxWidth ? 256 : undefined,
            }}
            variant="outlined"
        >
            <CardContent>
                <div style={{ minHeight: minHeight ? 160 : undefined }}>
                    <Typography variant="h5" component="div">
                        {companyName}
                    </Typography>
                    <Typography variant="body1" component="div">
                        {companyDescription}
                    </Typography>
                </div>
                <div style={{ marginBlock: 0.5, marginBlockStart: 1 }}>
                    {languages &&
                        languages.map((language, index) => {
                            return language.languageName.length > 0 &&
                                language.frameworks &&
                                language.frameworks.length > 0 ? (
                                <Fragment key={index}>
                                    <Typography
                                        variant="caption"
                                        component="div"
                                        sx={{ paddingTop: 0.5, marginInline: 0.5, fontWeight: 900 }}
                                    >
                                        {language.languageName}
                                    </Typography>
                                    <div
                                        key={language.languageName}
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            flexDirection: 'row',
                                            justifyContent: justifyContent,
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
                                                    sx={{ margin: 0.25, marginBlockEnd: 0.5 }} // Adjust margin as needed
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
                                        sx={{ paddingTop: 0.5, marginInline: 0.5, fontWeight: 900 }}
                                    ></Typography>
                                    <div
                                        key={language.languageName}
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            flexDirection: 'row',
                                            justifyContent: justifyContent,
                                            alignItems: 'center',
                                            marginInline: 4,
                                        }}
                                    >
                                        <Chip
                                            size="small"
                                            key={language.languageName}
                                            label={language.languageName}
                                            sx={{ margin: 0.25, marginBlockEnd: 0.5 }} // Adjust margin as needed
                                        />
                                    </div>
                                </Fragment>
                            );
                        })}
                </div>
            </CardContent>
        </Card>
    );
};

export default WorkExperienceCard;
