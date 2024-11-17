import { Alert, Container, Snackbar, Typography } from '@mui/material';
import styles from '@/styles/Home.module.scss';
import { FC, memo, useMemo, useState } from 'react';
import { useSnackbar } from '@/context/snackbarContext';
import LayoutProps from './layout.props';
import Image from 'next/image';
import logoCropped from '../../public/logo/png/logo-no-background.png';
import useMediaQuery from '@/hooks/useMediaQuery';

const DefaultLayout: FC<LayoutProps> = memo(({ children }) => {
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
        return [...Array(40)].map((_, i) => <div key={i} className={styles.star}></div>);
    }, []);

    const isMobile = useMediaQuery('(max-width: 768px)');
    const imageDimensions = useMemo(() => {
        return isMobile ? 70 : 100;
    }, [isMobile]);

    return (
        <>
            <div>
                <div className={styles.stars}>{stars}</div>
                <main className={styles.styledBackground}>
                    <Container maxWidth="lg">{children}</Container>
                    <Image
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        width={imageDimensions}
                        height={imageDimensions}
                        className={styles.logo}
                        src={logoCropped.src}
                        alt="Website Logo"
                        id="logo"
                    ></Image>
                    <Typography
                        onMouseEnter={onMouseEnterText}
                        onMouseLeave={onMouseLeaveText}
                        className={`${styles.logoSubText} ${hovered ? styles.visible : ''}`}
                    >
                        Developer extraordinaire
                    </Typography>
                </main>
            </div>
            {snackbar && (
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={snackbar.autoHideDuration}
                    onClose={hideSnackbar}
                >
                    <Alert severity={snackbar.severity} variant="filled" sx={{ width: '100%' }}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            )}
        </>
    );
});

DefaultLayout.displayName = 'DefaultLayout';

export default DefaultLayout;
