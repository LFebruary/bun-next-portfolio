import Head from 'next/head';
import personalProjects from '@/data/personalProjects.data';
import workExperiences from '@/data/workExperiences.data';
import DefaultLayout from '@/components/layouts/default-layout';
import dynamic from 'next/dynamic';

const AvatarSection = dynamic(() => import('@/components/home/avatar-section/avatar-section'));
const WorkExperienceSection = dynamic(
    () => import('@/components/home/work-experience-section/work-experience-section')
);
const PersonalProjectsSection = dynamic(
    () => import('@/components/home/personal-projects-section/personal-projects-section')
);
const WorkProjectsSection = dynamic(
    () => import('@/components/home/work-projects-section/work-projects-section')
);

export default function Home() {
    return (
        <>
            <Head>
                <title>Lyle February | Full Stack Developer</title>
                <meta
                    name="description"
                    content="Discover Lyle February's portfolio, a Full Stack Developer with expertise in C#, TypeScript, and Flutter. Explore his notable projects, including custom-logger, JSHelpers, AvaloniaSerialToSocket, AvaloniaToolbox, and XamarinSocketClient."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Lyle February, Full Stack Developer" />
                <meta property="og:title" content="Lyle February | Full Stack Developer" />
                <meta
                    property="og:description"
                    content="Discover Lyle February's portfolio, a Full Stack Developer with expertise in C#, TypeScript, and Flutter. Explore his notable projects, including custom-logger, JSHelpers, AvaloniaSerialToSocket, AvaloniaToolbox, and XamarinSocketClient."
                />
                {/* <meta property="og:image" content="https://example.com/lyle-february-portfolio-image.jpg" />
        <meta property="og:url" content="https://lylefebruary.dev" /> */}
                <meta property="og:type" content="website" />
                {/* <meta name="twitter:card" content="summary_large_image" /> */}
                <meta name="twitter:title" content="Lyle February | Full Stack Developer" />
                <meta
                    name="twitter:description"
                    content="Discover Lyle February's portfolio, a Full Stack Developer with expertise in C#, TypeScript, and Flutter. Explore his notable projects, including custom-logger, JSHelpers, AvaloniaSerialToSocket, AvaloniaToolbox, and XamarinSocketClient."
                />
                {/* <meta name="twitter:image" content="https://example.com/lyle-february-portfolio-image.jpg" /> */}
                <link rel="icon" href="/favicon.ico" />
                {/* <script type="text/javascript">let FF_FOUC_FIX;</script> */}
            </Head>
            <DefaultLayout>
                <AvatarSection />
                <WorkExperienceSection workExperiences={workExperiences} />
                <PersonalProjectsSection projects={personalProjects} />
                <WorkProjectsSection projects={[]} />
            </DefaultLayout>
        </>
    );
}
