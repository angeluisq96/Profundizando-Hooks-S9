const { render, screen } = require("@testing-library/react")
const { MemoryRouter } = require("react-router-dom")
const { SearchPage } = require("../../../src/heroes/pages/SearchPage")

describe('Tests en Search Page', () => {
  test('Debe mostrar los valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )
  expect( container ).toMatchSnapshot();
  })

  test('Debe de mostrar a batman y el input con el valor del queryString', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )

    const noHeroSearch = screen.getByLabelText('alert-no-hero');
    expect( noHeroSearch.style.display ).toBe('none');
  })
})