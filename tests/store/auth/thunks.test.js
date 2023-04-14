import { checkingCredentials } from "../../../src/store/auth/authSlice";
import { checkingAuthentication } from "../../../src/store/auth/thunks";

jest.mock('../../../src/firebase/providers')

describe('Tests auth thunks', () => {
  const dispatch = jest.fn();

  beforeEach( () => jest.clearAllMocks() ) ;

  test('should first checkingAuthentication', async() => {
    await checkingAuthentication()( dispatch );
    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() ) ;
  } ) ;




} ) ;