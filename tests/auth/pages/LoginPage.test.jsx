import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { notAuthenticatedState, userTests } from "../../fixtures/authFixtures";

const mockStartGoogleSingIn = jest.fn();
const mockStartUserAndPasswordSingIn = jest.fn();
jest.mock('../../../src/store/auth/thunks', () => ({
  startGoogleSingIn: () => mockStartGoogleSingIn,
  startUserAndPasswordSingIn: ({ email, pass }) => {
    return () => mockStartUserAndPasswordSingIn({ email, pass })
  } 
} ) ) ;

jest.mock('react-redux', () => ( {
  ...jest.requireActual('react-redux'),
  useDispatch: () => ( fn = () => {} ) => fn(),
} ) ) ;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
})

describe('Testing about LoginPage', () => {
  beforeEach( () => jest.clearAllMocks() ) ;

  test('should get LoginPage', () => {
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
    expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1)
  } ) ;

  test('should with bitton call startGoogleSingIn', () => {
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
    const button = screen.getByLabelText('google-btn');
    fireEvent.click( button )
    expect( mockStartGoogleSingIn ).toHaveBeenCalled()
  } ) ;

  test('should onSubmit call startUserAndPasswordSingIn', () => {
    const email = userTests.email
    const pass = 'jklaefnalinfa'
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    ) ;
    const emailField = screen.getByRole('textbox', { name: 'Email' } ) ;
    fireEvent.change( emailField, { target: { name: 'email', value: email } } ) ;

    const passField = screen.getByLabelText('Password') ;
    fireEvent.change( passField, { target: { name: 'password', value: pass } } ) ;
    
    const loginForm = screen.getByLabelText('submit-form') ;
    fireEvent.submit( loginForm )

    expect( mockStartUserAndPasswordSingIn ).toHaveBeenCalledWith({ email, undefined })
  } ) ;
} ) ;