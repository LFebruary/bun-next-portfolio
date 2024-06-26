import { Avatar } from "@mui/material";
import { useState } from "react";
import Image from 'next/image';
import styles from './my-avatar.module.scss';

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
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
                <Image src="/me.jpeg" alt="Lyle February" width={40} height={40} />
            </Avatar>

    );
};

export default MyAvatar;