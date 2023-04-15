import { loginWithEmailAndPassword, logoutFirebase, registerWithEmailAndPassword, singInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = () => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );
  }
}

export const startGoogleSingIn = () => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );
    const result = await singInWithGoogle()
    if ( !result.ok ) return dispatch( logout( result.errorMessage ) );
    dispatch( login( result ) )
  }
}

export const startUserAndPasswordSingIn = ({ email, password }) => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );
    const result = await loginWithEmailAndPassword({ email, password })
    if ( !result.ok ) return dispatch( logout( result.errorMessage ) );
    dispatch( login( result ) )
  }
}

export const startRegisterWithEmailAndPassword = ({ email, password, displayName }) => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );
    const result = await registerWithEmailAndPassword({ email, password, displayName })
    if ( !result.ok ) return dispatch( logout( result.errorMessage ) );
    dispatch( login( result ) )
  }
}

export const startLogout = () => {
  return async( dispatch ) => {
    await logoutFirebase();
    dispatch( clearNotesLogout() )
    dispatch( logout() )
  }
}