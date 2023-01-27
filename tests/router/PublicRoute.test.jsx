const { render, screen } = require("@testing-library/react")
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
})