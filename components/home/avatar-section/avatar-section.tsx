import CoolText from "@/components/cool-text";
import MyAvatar from "@/components/my-avatar";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { FC, useState } from "react";

const AvatarSection: FC<{}> = () => {
    const [avatarHovered, setIsAvatarHovered] = useState(false);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 24,
            flexDirection: 'column',
            minHeight: 440,
        }}>
            <MyAvatar isHoveringCallback={setIsAvatarHovered} />
            {avatarHovered &&
                <Fade in={avatarHovered} timeout={1500} style={{ paddingTop: 24 }}>
                    <Typography
                        variant="body1">
                        Your friendly neighborhood IT nerd 🤓
                    </Typography>
                </Fade>
            }
            <div style={{ paddingTop: 24 }}>
                <CoolText text='Lyle' inline caption='Apparently means "island" or "from the island"' /> &nbsp;
                <CoolText text='February' inline caption='Second best month of the year or something.' />
            </div>
        </div>
    );
};

export default AvatarSection;