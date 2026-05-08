"use client";
import { Avatar, SxProps, Theme } from "@mui/material";
import Image from "next/image";
import { ComponentProps, FC, memo, useCallback, useMemo } from "react";
import styles from "./cool-avatar.module.scss";

type NextImageSource = ComponentProps<typeof Image>["src"];

interface CoolAvatarProps {
  isHoveringCallback?: (hovered: boolean) => void;
  disableHoverResize?: boolean;
  disableHoverAnimation?: boolean;
  src?: NextImageSource;
  alt?: string;
  priority?: boolean;
}

const CoolAvatar: FC<CoolAvatarProps> = memo(
  ({
    isHoveringCallback,
    disableHoverResize,
    disableHoverAnimation,
    alt = "",
    src = "",
    priority = false,
  }) => {
    const onMouseEnter = useCallback(() => {
      isHoveringCallback?.(true);
    }, [isHoveringCallback]);

    const onMouseLeave = useCallback(() => {
      isHoveringCallback?.(false);
    }, [isHoveringCallback]);

    const className = useMemo(() => {
      let avatarClass = styles.avatar;
      if (!disableHoverResize) {
        avatarClass += ` ${styles.hoverResize}`;
      }

      if (!disableHoverAnimation) {
        avatarClass += ` ${styles.animate}`;
      }

      return avatarClass;
    }, [disableHoverResize, disableHoverAnimation]);

    return (
      <div
        className={className}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Image
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 192px, 256px"
          src={src}
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  },
);

CoolAvatar.displayName = "CoolAvatar";

export default CoolAvatar;
