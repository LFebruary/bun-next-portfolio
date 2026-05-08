import { TypographyVariant } from "@mui/material";

export default interface CoolTextProps {
  text: string;
  inline?: boolean;
  caption?: string;
  forcedHoverState?: boolean;
  variant: TypographyVariant;
}
