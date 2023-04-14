import { singInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startGoogleSingIn } from "../../../src/store/auth/thunks";
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

    const queEs = logout( loginData.errorMessage )
    console.log(queEs)

    // expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() ) ;
    expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) ) ;
  } ) ;

} ) ;