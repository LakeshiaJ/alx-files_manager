import { Email, Password } from "@mui/icons-material";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth/web-extension";

export const doCreateUserWithEmailAndPassword = async (Email, Password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () = {
    const provider = new GoogleAuthProvider = ();
    const result = await signInWithPopup(auth, provider);
    //result.user
    return result 

};

export const doSignOut = () => {
    return auth.SignOut();
};

