"use client";
import { SxProps, Theme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { FC, Fragment, memo, useMemo } from "react";
import { WorkExperience } from "@/interfaces";

interface WorkExperienceCardProps extends WorkExperience {
  minHeight?: boolean;
  margin?: boolean;
  maxWidth?: boolean;
  justifyContent:
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "start"
    | undefined;
  shadow?: boolean;
}

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
      let classes = "";

      if (current && shadow) classes += "present";
      else if (shadow) classes += " applyShadow";

      return classes;
    }, [shadow, endDate]);

    if (languages) {
      languages.sort((a, b) => {
        if (a.languageName.toLowerCase() === "misc") return 1;
        if (b.languageName.toLowerCase() === "misc") return -1;
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
        marginBlock: margin ? 2 : undefined,
        maxWidth: maxWidth ? 256 : undefined,
        minWidth: 275,
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
              component="div"
              sx={{
                fontWeight: 900,
                marginInline: 0.5,
                paddingTop: 0.5,
              }}
              variant="caption"
            >
              {language.languageName}
            </Typography>
            <div
              key={language.languageName}
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: justifyContent,
                marginInline: 4,
              }}
            >
              {language.frameworks.map((framework) => {
                return (
                  <Chip
                    key={framework}
                    label={framework}
                    size="small"
                    sx={{
                      margin: 0.25,
                      marginBlockEnd: 0.5,
                    }}
                  />
                );
              })}
            </div>
          </Fragment>
        ) : (
          <Fragment key={index}>
            <Typography
              component="div"
              sx={{
                fontWeight: 900,
                marginInline: 0.5,
                paddingTop: 0.5,
              }}
              variant="caption"
            ></Typography>
            <div
              key={language.languageName}
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: justifyContent,
                marginInline: 4,
              }}
            >
              <Chip
                key={language.languageName}
                label={language.languageName}
                size="small"
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
        className={classes}
        key={companyName.replace(" ", "")}
        sx={cardSxProps}
        variant="outlined"
      >
        <CardContent>
          <div style={{ minHeight: companyDetailsMinHeight }}>
            <Typography component="div" variant="h5">
              {companyName}
            </Typography>
            <Typography component="div" variant="body1">
              {companyDescription}
            </Typography>
          </div>
          <div style={{ marginBlock: 0.5, marginBlockStart: 1 }}>
            {...languageChipSections}
          </div>
        </CardContent>
      </Card>
    );
  },
);

WorkExperienceCard.displayName = "WorkExperienceCard";

export default WorkExperienceCard;
