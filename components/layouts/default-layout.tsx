import { Container } from "@mui/material"
import styles from '@/styles/Home.module.scss';
import { FC, ReactNode } from "react"

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <div className={styles.stars}>
                {[...Array(40)].map((x, i) =>
                    <div key={i} className={styles.star}></div>
                )}
            </div>
            <main className={styles.styledBackground}>
                <Container maxWidth="lg">
                    {children}
                </Container>
            </main>
        </>
    )
}

export default DefaultLayout;