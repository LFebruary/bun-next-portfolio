import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { FC, memo, useMemo } from 'react';

const MobileTimelineLanguageSection: FC<{
    languageName: string;
    frameworks?: string[];
}> = memo(({ languageName, frameworks }) => {
    const chips = useMemo(() => {
        if (frameworks) {
            return frameworks.map((framework) => (
                <Chip
                    size="small"
                    key={framework}
                    label={framework}
                    sx={{ margin: 0.25, marginBlockEnd: 0.75 }}
                />
            ));
        }

        return [
            <Chip
                key={`${languageName}-chip`}
                size="small"
                label={languageName}
                sx={{ margin: 0.25, marginBlockEnd: 0.75 }}
            />,
        ];
    }, [frameworks, languageName]);

    return (
        <div>
            <Typography
                variant="caption"
                component="div"
                sx={{ paddingTop: 1, marginInline: 0.5, fontWeight: 900 }}
            >
                {languageName}
            </Typography>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    marginInline: 4,
                }}
            >
                {...chips}
            </div>
        </div>
    );
});

MobileTimelineLanguageSection.displayName = 'LanguageSection';

export default MobileTimelineLanguageSection;
