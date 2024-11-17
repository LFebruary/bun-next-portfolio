import CoolText from '@/components/cool-text';
import MyAvatar from '@/components/my-avatar';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { FC, memo, useState } from 'react';
import styles from './avatar-section.module.scss';

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
            <MyAvatar isHoveringCallback={setIsAvatarHovered} />
            {avatarHovered && (
                <Fade in={avatarHovered} timeout={1500} style={{ paddingTop: 24 }}>
                    <Typography variant="body1">Your friendly neighborhood IT nerd 🤓</Typography>
                </Fade>
            )}
            <div style={{ paddingTop: 24 }}>
                <CoolText
                    text="Lyle"
                    inline
                    caption='Apparently means "island" or "from the island"'
                />{' '}
                &nbsp;
                <CoolText
                    text="February"
                    inline
                    caption="Second best month of the year or something."
                />
            </div>
        </div>
    );
});

AvatarSection.displayName = 'AvatarSection';

export default AvatarSection;
