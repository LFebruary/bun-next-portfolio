import { Container } from "@mui/material"
import Fade from "@mui/material/Fade";
import styles from '@/styles/Home.module.scss';
import { FC, ReactNode } from "react"

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
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
    )
}

export default DefaultLayout;