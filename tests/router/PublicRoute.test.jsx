const { render, screen } = require("@testing-library/react")
const { MemoryRouter, Routes, Route } = require("react-router-dom")
const { AuthContext } = require("../../src/auth")
const { PublicRoute } = require("../../src/router/PublicRoute")



describe('Pruebas en PublicRoute', () => {
  test('Debe de mostrar el children si no esta loggeado', () => {
    const contextValue = {
      logged: false
    }

    render(
      <AuthContext.Provider value={ contextValue }>
        <PublicRoute>
          <h1>Public Route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Public Route') ).toBeTruthy()
  })

  test('Debe entrar al navigate si esta loggeado', () => { 
    const contextValue = {
      logged: true,
      user: {
        name: 'Gohan',
        id: 1,
      }
    }

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/marvel']}>
          <Routes>
            <Route path='login' element={
              <PublicRoute>
                <h1>Public</h1>
              </PublicRoute>
            } />
            <Route path='marvel' element={ <h1>Private Route</h1> } />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Private Route') ).toBeTruthy()
  })
})