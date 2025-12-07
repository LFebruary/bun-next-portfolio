"use client";
import {
    Alert,
    Container,
    Snackbar,
    Typography,
    useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC, memo, useMemo, useState } from "react";
import styles from "@/styles/Home.module.scss";
import { useSnackbar } from "../../context/snackbarProvider";
import logoCropped from "../../public/logo/png/logo-no-background.png";
import DefaultLayoutWrapperProps from "./default-layout-wrapper.props";

const DefaultLayoutWrapper: FC<DefaultLayoutWrapperProps> = memo(
    ({ children, removeBackgroundBlur }) => {
        const { snackbar, hideSnackbar } = useSnackbar();
        const [hovered, setHovered] = useState<boolean>(false);

        const onMouseEnter = () => {
            setHovered(true);
        };

        const onMouseLeave = () => {
            setHovered(false);
        };

        const onMouseEnterText = () => {
            if (hovered) {
                setHovered(true);
            }
        };

        const onMouseLeaveText = () => {
            if (hovered) {
                setHovered(false);
            }
        };

        const stars = useMemo(() => {
            return [...Array(40)].map((_, i) => (
                <div className={styles.star} key={i}></div>
            ));
        }, []);

        const isMobile = useMediaQuery("(max-width: 768px)");
        const imageDimensions = useMemo(() => {
            return isMobile ? 70 : 100;
        }, [isMobile]);

        const backgroundClassName = useMemo(() => {
            let backgroundClassCurrent = styles.styledBackground;
            if (!removeBackgroundBlur) {
                backgroundClassCurrent += ` ${styles.blur}`;
            }
            return backgroundClassCurrent;
        }, [removeBackgroundBlur]);

        return (
            <>
                <div>
                    <div className={styles.stars}>{stars}</div>
                    <main className={backgroundClassName}>
                        <Container maxWidth="lg">{children}</Container>
                        <Link href={"/"}>
                            <Image
                                alt="Website Logo"
                                className={styles.logo}
                                height={imageDimensions}
                                id="logo"
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                src={logoCropped.src}
                                width={imageDimensions}
                            ></Image>
                            <Typography
                                className={`${styles.logoSubText} ${hovered ? styles.visible : ""}`}
                                onMouseEnter={onMouseEnterText}
                                onMouseLeave={onMouseLeaveText}
                            >
                                Developer extraordinaire
                            </Typography>
                        </Link>
                    </main>
                </div>
                {snackbar && (
                    <Snackbar
                        autoHideDuration={snackbar.autoHideDuration}
                        onClose={hideSnackbar}
                        open={snackbar.open}
                    >
                        <Alert
                            severity={snackbar.severity}
                            sx={{ width: "100%" }}
                            variant="filled"
                        >
                            {snackbar.message}
                        </Alert>
                    </Snackbar>
                )}
            </>
        );
    },
);

DefaultLayoutWrapper.displayName = "DefaultLayout";

export default DefaultLayoutWrapper;
