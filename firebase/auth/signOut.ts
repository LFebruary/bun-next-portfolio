import firebaseApp from "../config";
import { getAuth, signOut as firebaseSignOut } from "firebase/auth";

const auth = getAuth(firebaseApp);

export default async function signOut() {
    let result = null, error = null;
    try {
        await firebaseSignOut(auth);
    } catch (e) {
        error = e;
    }

    return { result, error };
}