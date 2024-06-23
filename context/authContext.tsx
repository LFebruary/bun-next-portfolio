import { createContext, useState, useContext, useEffect, ReactElement, FC } from 'react';
import {
    onAuthStateChanged,
    getAuth,
    User,
} from 'firebase/auth';
import firebaseApp from '@/firebase/config';
import CircularProgress from '@mui/material/CircularProgress';

// Initialize Firebase Auth
const auth = getAuth(firebaseApp);

// Define the shape of the AuthContext
interface AuthContextType {
    user: User | undefined;
    loading: boolean;
    setUser: (user: User | undefined) => void;
}

// Create the AuthContext with an initial value of null for user, true for loading, and an empty function for setUser
const AuthContext = createContext<AuthContextType>({ user: undefined, loading: true, setUser: () => { } });

// Custom hook to use the AuthContext
export const useAuthContext = () => useContext(AuthContext);

// AuthContextProvider component
export const AuthContextProvider: FC<{ children: ReactElement }> = ({ children }) => {
    const [user, setUser] = useState<User | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Subscribe to Firebase Auth state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user === null ? undefined : user);
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, setUser }}>
            {loading ? <FullPageLoader /> : children}
        </AuthContext.Provider>
    );
};

const FullPageLoader: React.FC = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </div>
    );
};
