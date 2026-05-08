import { SxProps, Theme } from "@mui/material";
import Image from "next/image";
import { ComponentProps } from "react";

type NextImageSource = ComponentProps<typeof Image>["src"];

export default interface CoolAvatarProps {
  isHoveringCallback?: (hovered: boolean) => void;
  disableHoverResize?: boolean;
  disableHoverAnimation?: boolean;
  src?: NextImageSource;
  alt?: string;
  priority?: boolean;
}
