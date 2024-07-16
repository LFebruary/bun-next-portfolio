import { Avatar } from "@mui/material";
import { useState, FC } from "react";
import thatsMe from "../../public/me.webp";
import styles from './my-avatar.module.scss';
interface MyAvatarProps {
    isHoveringCallback?: ((hovered: boolean) => void) | undefined
}

const MyAvatar: FC<MyAvatarProps> = (props: MyAvatarProps) => {
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
            src={thatsMe.src}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
        </Avatar>

    );
};

export default MyAvatar;