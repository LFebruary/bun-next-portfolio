import DefaultLayout from '@/components/layouts/default-layout';
import { Card, CardContent, CardHeader, Link, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import theme from '@/constants/theme';
import MyAvatar from '@/components/my-avatar';
import useMediaQuery from '@/hooks/useMediaQuery';
import { GetStaticProps } from 'next';

interface ContactInfo {
    name: string;
    linkedin: string;
    github: string;
    stackoverflow: string;
}

interface ContactPageProps {
    contactInfo: ContactInfo;
}

class EnvironmentError extends Error {
    constructor(missingVars: string[]) {
        super(`Missing required environment variables: ${missingVars.join(', ')}`);
        this.name = 'EnvironmentError';
    }
}

function validateEnvVariables() {
    const requiredVars = {
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
        github: process.env.NEXT_PUBLIC_GITHUB_URL,
        stackoverflow: process.env.NEXT_PUBLIC_STACKOVERFLOW_URL,
    };

    const missingVars = Object.entries(requiredVars)
        .filter(([value]) => !value)
        .map(([key]) => key);

    if (missingVars.length > 0) {
        throw new EnvironmentError(missingVars);
    }

    return requiredVars as { [K in keyof typeof requiredVars]: string };
}

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => {
    try {
        const validatedVars = validateEnvVariables();

        const contactInfo: ContactInfo = {
            name: 'Lyle February',
            linkedin: validatedVars.linkedin,
            github: validatedVars.github,
            stackoverflow: validatedVars.stackoverflow,
        };

        return {
            props: {
                contactInfo,
            },
            revalidate: 86400,
        };
    } catch (error) {
        if (error instanceof EnvironmentError) {
            throw new Error(`Failed to load contact page: ${error.message}`);
        }
        throw new Error('An unexpected error occurred while loading the contact page');
    }
};

export default function Contact({ contactInfo }: ContactPageProps) {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <>
            <Head>
                <title>Lyle February | Contact</title>
                <meta
                    name="description"
                    content="Contact Lyle February, a Full Stack Developer specializing in C#, TypeScript, and Flutter. Reach out to discuss potential collaborations or projects."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="Lyle February, Full Stack Developer, Contact, Web Development"
                />

                {/* Open Graph Metadata */}
                <meta property="og:title" content="Contact Lyle February | Full Stack Developer" />
                <meta
                    property="og:description"
                    content="Contact Lyle February, a Full Stack Developer specializing in C#, TypeScript, and Flutter. Reach out to discuss potential collaborations or projects."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://your-portfolio-site.com/contact" />

                {/* Twitter Card Metadata */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Contact Lyle February | Full Stack Developer" />
                <meta
                    name="twitter:description"
                    content="Contact Lyle February, a Full Stack Developer specializing in C#, TypeScript, and Flutter. Reach out to discuss potential collaborations or projects."
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultLayout removeBackgroundBlur={true}>
                <Card
                    elevation={8}
                    sx={{
                        maxWidth: 400,
                        margin: 'auto',
                        marginTop: isMobile ? 16 : undefined,
                        textAlign: 'center',
                        padding: 2,
                    }}
                >
                    <CardHeader
                        avatar={
                            <MyAvatar
                                disableHoverResize={true}
                                disableHoverAnimation={true}
                                sx={{
                                    width: 128,
                                    height: 128,
                                    margin: 'auto',
                                }}
                            />
                        }
                        title={
                            <Typography variant="h5" component="div">
                                {contactInfo.name}
                            </Typography>
                        }
                    />
                    <CardContent>
                        <Stack spacing={2} direction="column" alignItems="center">
                            {/* <Link
                                href={`mailto:${contactInfo.email}`}
                                underline="hover"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    color: theme.palette.common.white,
                                }}
                            >
                                <EmailIcon sx={{ color: theme.palette.common.white }} />{' '}
                                {contactInfo.email}
                            </Link> */}

                            <Link
                                href={contactInfo.linkedin}
                                target="_blank"
                                color="primary"
                                underline="hover"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    color: theme.palette.common.white,
                                }}
                            >
                                <LinkedInIcon /> LinkedIn
                            </Link>

                            <Link
                                href={contactInfo.github}
                                target="_blank"
                                color="primary"
                                underline="hover"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    color: theme.palette.common.white,
                                }}
                            >
                                <GitHubIcon /> GitHub
                            </Link>

                            <Link
                                href={contactInfo.stackoverflow}
                                target="_blank"
                                color="primary"
                                underline="hover"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    color: theme.palette.common.white,
                                }}
                            >
                                Stack Overflow
                            </Link>
                        </Stack>
                    </CardContent>
                </Card>
            </DefaultLayout>
        </>
    );
}
