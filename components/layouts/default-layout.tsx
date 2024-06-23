import { Alert, Container, Snackbar } from "@mui/material"
import Fade from "@mui/material/Fade";
import styles from '@/styles/Home.module.scss';
import { FC, ReactNode } from "react"
import { useSnackbar } from "@/context/snackbarContext";
import Slide, { SlideProps } from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
    const { snackbar, hideSnackbar } = useSnackbar();

    function SlideTransition(props: TransitionProps) {
        return <Slide {...(props as SlideProps)} direction="up" />;
    }

    return (
        <>
            <Fade in={true} timeout={1000}>
                <div>
                    <div className={styles.stars}>
                        {[...Array(40)].map((_, i) =>
                            <div key={i} className={styles.star}></div>
                        )}
                    </div>
                    <main className={styles.styledBackground}>
                        <Container maxWidth="lg">
                            {children}
                        </Container>
                    </main>
                </div>
            </Fade>
            {snackbar &&
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={snackbar.autoHideDuration}
                    onClose={hideSnackbar}
                    TransitionComponent={SlideTransition}
                >
                    <Alert
                        severity={snackbar.severity}
                        variant="filled"
                        sx={{ width: '100%' }}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            }
        </>

    )
}

export default DefaultLayout;