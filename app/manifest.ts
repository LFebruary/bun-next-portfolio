import type { MetadataRoute } from "next";
import { SITE_NAME } from "../constants/SHARED";
import { THEME_COLORS } from "@/constants/THEMING";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: THEME_COLORS.background,
    description:
      "Discover Lyle February's portfolio, a Full Stack Developer with expertise in C#, TypeScript, and Dart. ",
    icons: [
      {
        sizes: "any",
        src: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    name: SITE_NAME,
    short_name: SITE_NAME,
    start_url: "/",
    theme_color: THEME_COLORS.primary,
  };
}
