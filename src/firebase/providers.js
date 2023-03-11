import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName, email, photoURL, uid
    }
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false, errorMessage
    }
  }
}

export const registerWithEmailAndPassword = async ({ email, password, displayname }) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL, displayName } = resp.user;
    updateProfile( FirebaseAuth.currentUser, { displayName } );
    return {
      ok: true,
      displayName, email, photoURL, uid
    }
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false, errorMessage
    }
  }
}

export const loginWithEmailAndPassword = async ({email, password}) => {
  try {
    const result = await signInWithEmailAndPassword(FirebaseAuth, email, password )
    const { displayName, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName, photoURL, uid
    }
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false, errorMessage
    }
  }
}

export const logoutFirebase = async() => {
  return await FirebaseAuth.signOut();
}