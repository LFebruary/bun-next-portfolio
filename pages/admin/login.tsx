import DefaultLayout from '@/components/layouts/default-layout';
import { useAuthContext } from '@/context/authContext';
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { FormEvent, useCallback, useState } from 'react';

export default function Admin() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { user } = useAuthContext();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useCallback(async () => {
        if (user) {
            await router.push('/admin');
        }
    }, [user, router]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const email = formData.get('username')?.toString();
        const password = formData.get('password')?.toString();

        if (!email || !password) {
            setLoading(false);
            setErrorMessage('Email and password is required for login.');
            return;
        }

        setLoading(false);

        // if (response.result && !response.error) {
        //     showSnackbar('Login successful', undefined, 'success');
        //     setUser(response?.result?.user);
        //     await router.push('/admin');
        // } else {
        //     setErrorMessage('Invalid credentials. Please try again.');
        //     showSnackbar('Login failed', undefined, 'error');
        // }
    }

    return (
        <DefaultLayout>
            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                style={{
                    height: 'calc(100vh - 64px)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Card sx={{ maxWidth: 512 }} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="div" marginBlockEnd={2}>
                            Login
                        </Typography>
                        <TextField
                            fullWidth
                            name="username"
                            label="Username"
                            type="email"
                            variant="outlined"
                            error={!!errorMessage}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            error={!!errorMessage}
                            helperText={errorMessage}
                        />
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', paddingBottom: 2 }}>
                        <LoadingButton loading={loading} variant="outlined" type="submit">
                            Login
                        </LoadingButton>
                    </CardActions>
                </Card>
            </form>
        </DefaultLayout>
    );
}
