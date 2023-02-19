import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

  const dispatch = useDispatch();

  const { isLoading, pokemons, page } = useSelector( state => state.pokemons );

  useEffect(() => {
    dispatch( getPokemons() )
  }, [])

  // console.log(page)
  // pokemons.map(pokemon => console.log(pokemon))
  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: { isLoading ? 'True': 'False' }</span>
      <ul>
        { 
          pokemons.map( ({name}) => (
            <li key={ name } >{ name }</li>
          )) 
        }
      </ul>
      <button
        disabled={ isLoading }
        onClick={ () => dispatch(getPokemons(page)) }
      >
        Next
      </button>
    </>
  );
}

