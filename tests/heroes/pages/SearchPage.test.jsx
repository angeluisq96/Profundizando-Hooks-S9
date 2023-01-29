const { render, screen, getByRole, fireEvent } = require('@testing-library/react')
const { MemoryRouter } = require('react-router-dom')
const { SearchPage } = require('../../../src/heroes/pages/SearchPage')

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('Tests en Search Page', () => {


  beforeEach(() => jest.clearAllMocks());

  test('Debe mostrar los valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )
  expect( container ).toMatchSnapshot();
  })

  test('Debe de mostrar a batman y el input con el valor del queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )
    const alertNoHero = screen.getByLabelText('alert-no-hero');
    expect( alertNoHero.style.display ).toBe('none');
  })

  test('Debe de mostrar el mensaje de error cuando no encuentra un heroe', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=tripleT']}>
        <SearchPage />
      </MemoryRouter>
    )
    const alertDanger = screen.getByLabelText('alert-danger');
    expect( alertDanger.style.display ).toBe('');
  })

  test('Debe de llamar el navigate a la pantalla nueva', () => {
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )
    const inputForm = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button');
    fireEvent.change( inputForm, { target: { name: 'searchText', value: 'superman' } } )
    fireEvent.click( submitButton );

    screen.debug();

    expect( mockedUseNavigate ).toHaveBeenCalledWith('?q=superman');


  })
})