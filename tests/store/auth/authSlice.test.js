import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, initialState, notAuthenticatedState, userTests } from "../../fixtures/authFixtures";

describe('Tests in authSlice', () => {
  test('testing to return initial state and assetr slice name', () => {
    const state = authSlice.reducer( initialState, {} ) ;
    expect( state ).toEqual( initialState ) ;
    expect( authSlice.name ).toBe( 'auth' ) ;
  } ) ;

  test('testing to login', () => {
    const state = authSlice.reducer( initialState, login( userTests ) ) ;
    expect( state ).toEqual({
      status: 'auth',
      uid: userTests.uid,
      email: userTests.email,
      displayName: userTests.displayName,
      photoURL: userTests.photoURL,
      errorMessage: null,
    } ) ;  
  } ) ;
  
  test('testing to logout', () => {
    const state = authSlice.reducer( authenticatedState, logout() ) ;
    expect( state ).toEqual({
      status: 'not-auth',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    } ) ;  
  } ) ;

  test('testing to logout with arguments', () => {
    const errorMessage = 'Invalid Credentials' ;
    const state = authSlice.reducer( authenticatedState, logout({ errorMessage }) ) ;
    expect( state ).toEqual({
      status: 'not-auth',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMessage,
    } ) ;  
  } ) ;

  test('Testing to checking', () => {
    const state = authSlice.reducer( notAuthenticatedState, checkingCredentials() ) ;
    expect( state.status ).toBe( 'checking' ) ;
  } ) ;

} ) ;