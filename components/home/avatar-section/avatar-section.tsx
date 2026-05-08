"use client";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { FC, memo, useState } from "react";
import CoolText from "@/components/cool-text/cool-text";
import thatsMe from "@/public/me.webp" with { type: "webp" };
import CoolAvatar from "../../cool-avatar/cool-avatar";
import styles from "./avatar-section.module.scss";

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
        priority
        src={thatsMe}
      />
      {avatarHovered && (
        <Fade in={avatarHovered} style={{ paddingTop: 24 }} timeout={1500}>
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
          variant="body1"
        />{" "}
        &nbsp;
        <CoolText
          caption="Second best month of the year or something."
          inline
          text="February"
          variant="body1"
        />
      </div>
    </div>
  );
});

AvatarSection.displayName = "AvatarSection";

export default AvatarSection;
