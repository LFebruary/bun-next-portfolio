import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { FC, memo, useMemo } from "react";

const MobileTimelineLanguageSection: FC<{
    languageName: string;
    frameworks?: string[];
}> = memo(({ languageName, frameworks }) => {
    const chips = useMemo(() => {
        if (frameworks) {
            return frameworks.map((framework) => (
                <Chip
                    key={framework}
                    label={framework}
                    size="small"
                    sx={{ margin: 0.25, marginBlockEnd: 0.75 }}
                />
            ));
        }

        return [
            <Chip
                key={`${languageName}-chip`}
                label={languageName}
                size="small"
                sx={{ margin: 0.25, marginBlockEnd: 0.75 }}
            />,
        ];
    }, [frameworks, languageName]);

    return (
        <div>
            <Typography
                component="div"
                sx={{ fontWeight: 900, marginInline: 0.5, paddingTop: 1 }}
                variant="caption"
            >
                {languageName}
            </Typography>
            <div
                style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "start",
                    marginInline: 4,
                }}
            >
                {...chips}
            </div>
        </div>
    );
});

MobileTimelineLanguageSection.displayName = "LanguageSection";

export default MobileTimelineLanguageSection;
