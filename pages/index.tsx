import Head from 'next/head';
import projects from '@/data/projects.data';
import workExperiences from '@/data/workExperiences.data';
import { AvatarSection, ProjectsSection, WorkExperienceSection } from '@/components/home';
import DefaultLayout from '@/components/layouts/default-layout';

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Lyle February | Full Stack Developer & C#, TypeScript, Flutter Specialist
                </title>
                <meta
                    name="description"
                    content="Discover Lyle February's portfolio, a Full Stack Developer with expertise in C#, TypeScript, and Flutter. Explore his notable projects, including custom-logger, JSHelpers, AvaloniaSerialToSocket, AvaloniaToolbox, and XamarinSocketClient."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Lyle February, Full Stack Developer" />
                <meta
                    property="og:title"
                    content="Lyle February | Full Stack Developer & C#, TypeScript, Flutter Specialist"
                />
                <meta
                    property="og:description"
                    content="Discover Lyle February's portfolio, a Full Stack Developer with expertise in C#, TypeScript, and Flutter. Explore his notable projects, including custom-logger, JSHelpers, AvaloniaSerialToSocket, AvaloniaToolbox, and XamarinSocketClient."
                />
                {/* <meta property="og:image" content="https://example.com/lyle-february-portfolio-image.jpg" />
        <meta property="og:url" content="https://lylefebruary.dev" /> */}
                <meta property="og:type" content="website" />
                {/* <meta name="twitter:card" content="summary_large_image" /> */}
                <meta
                    name="twitter:title"
                    content="Lyle February | Full Stack Developer & C#, TypeScript, Flutter Specialist"
                />
                <meta
                    name="twitter:description"
                    content="Discover Lyle February's portfolio, a Full Stack Developer with expertise in C#, TypeScript, and Flutter. Explore his notable projects, including custom-logger, JSHelpers, AvaloniaSerialToSocket, AvaloniaToolbox, and XamarinSocketClient."
                />
                {/* <meta name="twitter:image" content="https://example.com/lyle-february-portfolio-image.jpg" /> */}
                <link rel="icon" href="/favicon.ico" />
                <script type="text/javascript">let FF_FOUC_FIX;</script>
            </Head>
            <DefaultLayout>
                <AvatarSection />
                <WorkExperienceSection workExperiences={workExperiences} />
                <ProjectsSection projects={projects} />
            </DefaultLayout>
        </>
    );
}

// export const getStaticProps = (async (context: any) => {
//   const firebaseApp = generateFBApp();
//   const auth = getAuth(firebaseApp);
//   return { props: { auth } };
// }) satisfies GetStaticProps<{
//   auth: Auth,
// }>
