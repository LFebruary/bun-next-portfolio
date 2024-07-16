import { Alert, Container, Snackbar } from "@mui/material"
import styles from '@/styles/Home.module.scss';
import { FC, ReactNode } from "react"
import { useSnackbar } from "@/context/snackbarContext";

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
    const { snackbar, hideSnackbar } = useSnackbar();

    return (
        <>
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
            {snackbar &&
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={snackbar.autoHideDuration}
                    onClose={hideSnackbar}
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