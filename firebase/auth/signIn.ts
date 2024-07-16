import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import getFBApp from "../config";

export default async function signIn(email: string, password: string) {
    const firebaseApp = getFBApp();
    const auth = getAuth(firebaseApp);
    
    let result = undefined, error = undefined;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e: any) {
        error = e;
    }

    return { result, error };
}