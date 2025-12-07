"use client";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import { FC, memo, useState } from "react";
import thatsMe from "@/public/me.webp";
import styles from "./avatar-section.module.scss";

const CoolText = dynamic(() => import("@/components/cool-text/cool-text"));
const CoolAvatar = dynamic(
    () => import("@/components/cool-avatar/cool-avatar"),
);

/**
 * AvatarSection component displays an avatar along with the user's name and a caption when hovered.
 * It uses CoolText for displaying the name with dynamic hover effects and MyAvatar for the avatar image.
 *
 * @returns {JSX.Element} A section containing an avatar, name, and an optional caption on hover.
 */
const AvatarSection: FC = memo(() => {
    const [avatarHovered, setIsAvatarHovered] = useState(false);

    return (
        <div className={styles.avatarSection}>
            <CoolAvatar
                alt="Lyle February"
                isHoveringCallback={setIsAvatarHovered}
                src={thatsMe.src}
            />
            {avatarHovered && (
                <Fade
                    in={avatarHovered}
                    style={{ paddingTop: 24 }}
                    timeout={1500}
                >
                    <Typography variant="body1">
                        Your friendly neighborhood IT nerd 🤓
                    </Typography>
                </Fade>
            )}
            <div style={{ paddingTop: 24 }}>
                <CoolText
                    caption='Apparently means "island" or "from the island"'
                    inline
                    text="Lyle"
                />{" "}
                &nbsp;
                <CoolText
                    caption="Second best month of the year or something."
                    inline
                    text="February"
                />
            </div>
        </div>
    );
});

AvatarSection.displayName = "AvatarSection";

export default AvatarSection;
