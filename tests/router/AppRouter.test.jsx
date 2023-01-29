import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { AppRouter } from "../../src/router/AppRouter"

describe('Pruebas en AppRouter', () => {
  test('debe mostrar el login si no esta autenticado', () => {
    const contextValue = {
      logged: false,
    }

    render(
       <MemoryRouter initialEntries={ ['/marvel'] }>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
       </MemoryRouter>
    )

    expect( screen.getAllByText('Login') ).toBeTruthy();
  })

  test('debe mostrar la pag de marvel si esta autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'superman',
        id: 1
      }
    }

    render(
       <MemoryRouter initialEntries={ ['/marvel'] }>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
       </MemoryRouter>
    )

    screen.debug();


    expect( screen.getAllByText('superman') ).toBeTruthy();
    expect( screen.getAllByText('Logout') ).toBeTruthy();
  })
})