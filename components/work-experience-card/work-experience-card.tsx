import { SxProps, Theme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { FC, Fragment, memo, useMemo } from 'react';
import WorkExperienceCardProps from './work-experience-card.props';

const WorkExperienceCard: FC<WorkExperienceCardProps> = memo(
    ({
        companyDescription,
        endDate,
        companyName,
        minHeight,
        margin,
        maxWidth,
        languages,
        justifyContent,
        shadow,
    }) => {
        const classes = useMemo(() => {
            const current = !endDate;
            let classes = '';

            if (current && shadow) classes += 'present';
            else if (shadow) classes += ' applyShadow';

            return classes;
        }, [shadow, endDate]);

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

        const cardSxProps: SxProps<Theme> = useMemo(() => {
            return {
                minWidth: 275,
                marginBlock: margin ? 2 : undefined,
                maxWidth: maxWidth ? 256 : undefined,
            };
        }, [margin, maxWidth]);

        const languageChipSections = useMemo(() => {
            if (!languages) return [<></>];

            return languages.map((language, index) => {
                return language.languageName.length > 0 &&
                    language.frameworks &&
                    language.frameworks.length > 0 ? (
                    <Fragment key={index}>
                        <Typography
                            variant="caption"
                            component="div"
                            sx={{
                                paddingTop: 0.5,
                                marginInline: 0.5,
                                fontWeight: 900,
                            }}
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
                                        sx={{ margin: 0.25, marginBlockEnd: 0.5 }}
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
                            sx={{
                                paddingTop: 0.5,
                                marginInline: 0.5,
                                fontWeight: 900,
                            }}
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
                                sx={{ margin: 0.25, marginBlockEnd: 0.5 }}
                            />
                        </div>
                    </Fragment>
                );
            });
        }, [justifyContent, languages]);

        const companyDetailsMinHeight = useMemo(() => {
            return minHeight ? 160 : undefined;
        }, [minHeight]);

        return (
            <Card
                key={companyName.replace(' ', '')}
                className={classes}
                sx={cardSxProps}
                variant="outlined"
            >
                <CardContent>
                    <div style={{ minHeight: companyDetailsMinHeight }}>
                        <Typography variant="h5" component="div">
                            {companyName}
                        </Typography>
                        <Typography variant="body1" component="div">
                            {companyDescription}
                        </Typography>
                    </div>
                    <div style={{ marginBlock: 0.5, marginBlockStart: 1 }}>
                        {...languageChipSections}
                    </div>
                </CardContent>
            </Card>
        );
    }
);

WorkExperienceCard.displayName = 'WorkExperienceCard';

export default WorkExperienceCard;
