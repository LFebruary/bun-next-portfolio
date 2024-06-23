import { Avatar } from "@mui/material";
import { useState } from "react";
import styles from './my-avatar.module.scss';
import avatarPicture from "../../public/me.jpeg";

interface MyAvatarProps {
    isHoveringCallback?: ((hovered: boolean) => void) | undefined
}

const MyAvatar: React.FC<MyAvatarProps> = (props: MyAvatarProps) => {
    const [_, setIsHovered] = useState(false);

    const onMouseEnter = () => {
        setIsHovered(true);
        props.isHoveringCallback && props.isHoveringCallback(true);
    };

    const onMouseLeave = () => {
        setIsHovered(false);
        props.isHoveringCallback && props.isHoveringCallback(false);
    };

    return (
        <Avatar
            className={styles.avatar}
            alt="Lyle february"
            src={avatarPicture.src}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} />

    );
};

export default MyAvatar;