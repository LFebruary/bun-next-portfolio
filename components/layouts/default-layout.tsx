import { Alert, Container, Snackbar } from '@mui/material';
import styles from '@/styles/Home.module.scss';
import { FC, memo, useMemo } from 'react';
import { useSnackbar } from '@/context/snackbarContext';
import LayoutProps from './layout.props';

const DefaultLayout: FC<LayoutProps> = memo(({ children }) => {
    const { snackbar, hideSnackbar } = useSnackbar();

    const stars = useMemo(() => {
        return [...Array(40)].map((_, i) => <div key={i} className={styles.star}></div>);
    }, []);

    return (
        <>
            <div>
                <div className={styles.stars}>{stars}</div>
                <main className={styles.styledBackground}>
                    <Container maxWidth="lg">{children}</Container>
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
