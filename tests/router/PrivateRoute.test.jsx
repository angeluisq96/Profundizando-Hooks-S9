const { render, screen } = require('@testing-library/react')
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Pruebas en el PrivateRoute', () => {
  test('Debe mostrar el children si esta autenticado', () => {

    Storage.prototype.setItem = jest.fn();
    const contextValue = {
      logged: true,
      user: {
        name: 'superman',
        id: 1,
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRoute>
            <h1>Private Route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Private Route')).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
  })
})