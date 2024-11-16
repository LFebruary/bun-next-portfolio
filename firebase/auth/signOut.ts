import { getAuth, signOut as firebaseSignOut } from 'firebase/auth';
import getFBApp from '../config';

export default async function signOut() {
    const firebaseApp = getFBApp();
    const auth = getAuth(firebaseApp);

    let result = null,
        error = null;
    try {
        await firebaseSignOut(auth);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
