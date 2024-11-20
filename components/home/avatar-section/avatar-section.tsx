import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { FC, memo, useState } from 'react';
import styles from './avatar-section.module.scss';
import thatsMe from '@/public/me.webp';
import dynamic from 'next/dynamic';

const CoolText = dynamic(() => import('@/components/cool-text'));
const CoolAvatar = dynamic(() => import('@/components/cool-avatar'));

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
                isHoveringCallback={setIsAvatarHovered}
                src={thatsMe.src}
                alt="Lyle February"
            />
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
