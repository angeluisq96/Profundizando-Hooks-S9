import { loginWithEmailAndPassword, logoutFirebase, registerWithEmailAndPassword, singInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startGoogleSingIn, startLogout, startRegisterWithEmailAndPassword, startUserAndPasswordSingIn } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
import { userTests } from '../../fixtures/authFixtures'

jest.mock('../../../src/firebase/providers')

describe('Tests auth thunks', () => {
  const dispatch = jest.fn();
  beforeEach( () => jest.clearAllMocks() ) ;

  test('should first checkingAuthentication', async() => {
    await checkingAuthentication()( dispatch );
    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() ) ;
  } ) ;

  test('should first startGoogleSingin call checkingCredentials and login Done', async() => {
    const loginData = { ok:true, ...userTests } ;
    await singInWithGoogle.mockResolvedValue( loginData ) ;
    await startGoogleSingIn()( dispatch )
    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() ) ;
    expect( dispatch ).toHaveBeenCalledWith( login( loginData ) ) ;
  } ) ;

  test('should first startGoogleSingin call checkingCredentials and login Error', async() => {
    const loginData = { ok:false, errorMessage: 'An error in google' } ;
    await singInWithGoogle.mockResolvedValue( loginData ) ;
    await startGoogleSingIn()( dispatch )
    expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) ) ;
  } ) ;

  test('should startUserAndPasswordSingIn call checkingCredentials and dispatch login True', async() => {
    const loginData = { ok:true, ...userTests } ;
    const formData = {email: loginData.email, password: 'saraza'}
    await loginWithEmailAndPassword.mockResolvedValue( loginData ) ;
    await startUserAndPasswordSingIn( formData )( dispatch )
    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() ) ;
    expect( dispatch ).toHaveBeenCalledWith( login(loginData) ) ;
  } ) ;

  test('should startRegisterWithEmailAndPassword call registerWithEmailAndPassword and dispatch login true', async () => {
    const loginData = { ok:true, ...userTests } ;
    const registerData = { email: userTests.email, password: 'zaraza', displayName: userTests.displayName } ;
    await registerWithEmailAndPassword.mockResolvedValue( loginData ) ;
    await startRegisterWithEmailAndPassword( registerData )( dispatch )
    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() ) ;
    expect( dispatch ).toHaveBeenCalledWith( login(loginData) ) ;
  } ) ;

  test('should  startRegisterWithEmailAndPassword call registerWithEmailAndPassword and dispatch login false', async () => {
    const loginData = { ok:false, errorMessage: 'password faint' } ;
    const registerData = { email: userTests.email, password: 'zaraza', displayName: userTests.displayName } ;
    await registerWithEmailAndPassword.mockResolvedValue( loginData ) ;
    await startRegisterWithEmailAndPassword( registerData )( dispatch )
    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() ) ;
    expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) ) ;
  } ) ;

  test('should startLogout call logoutFirebase', async () => {
    await startLogout()( dispatch ) ;
    expect( logoutFirebase ).toHaveBeenCalled();
    expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
    expect( dispatch ).toHaveBeenCalledWith( logout() );
  } ) ;

} ) ;