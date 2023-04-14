import { loginWithEmailAndPassword, logoutFirebase, registerWithEmailAndPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = () => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );
  }
}

export const startGoogleSingIn = ( email, password ) => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );
    const result = await singInWithGoogle()

    console.log(result)

    if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

    dispatch( login( result ) )

  }
}

export const startRegisterWithEmailAndPassword = ({ email, password, displayName }) => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );
    
    const { ok, uid, photoURL, errorMessage } = await registerWithEmailAndPassword({ email, password, displayName })

    if ( !ok ) return dispatch( logout( {errorMessage} ) )

    dispatch( login({ uid, displayName, email, photoURL }) )
  }
}

export const startUserAndPasswordSingIn = ({ email, password }) => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );
    // const result = await loginWithEmailAndPassword( {email, password })

    const { ok, uid, photoURL, displayName, errorMessage } = await loginWithEmailAndPassword({ email, password })

    if ( !ok ) return dispatch( logout( {errorMessage} ) )

    dispatch( login({ uid, displayName, email, photoURL }) )

  }
}

export const startLogout = () => {
  return async( dispatch ) => {
    await logoutFirebase();
    dispatch( logout({}) )
  }
}