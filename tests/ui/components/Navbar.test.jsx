const { screen, render, fireEvent } = require("@testing-library/react");
const { MemoryRouter, useNavigate } = require("react-router-dom");
const { AuthContext } = require("../../../src/auth");
const { Navbar } = require("../../../src/ui");

const contextValue = {
  logged: true,
  user: {
    name: 'Angeloman',
    id: 1,
  },
  logout: jest.fn(),
}

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

// Aqui acabamos de crear un mock para la libreria de react-router-dom
// donde devolvemos la libreria completa igual que como viene 
// y solo modificamos el use navigate

describe('Pruebas en Navbar', () => {

  test('Debe mostrar el usuario logeado', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
            <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect( contextValue.user.name ).toBeTruthy();
  });

  test('Debe llamar el logout y el navigate', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
            <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    
    const logoutButton = screen.getByRole('button');
    fireEvent.click( logoutButton );
    expect( contextValue.logout ).toHaveBeenCalled();
    expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});

  })
})