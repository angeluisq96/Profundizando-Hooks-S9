import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import queryString from "query-string";
import { getHeroById, getHeroesByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

  const hero = getHeroById('dc-wonder')

  const navigate = useNavigate();

  const location = useLocation();

  const { q = '' } = queryString.parse( location.search )

  const heroes = getHeroesByName(q)

  const onSubmitSearch = (e) => {
    e.preventDefault();
    if ( searchText.trim().length <= 1 ) return;
    navigate(`?q=${ searchText }`);
  }

  const showTitle = (q === '')
  const showError = (q.length > 0) && heroes.length === 0;
  console.log(showError)

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  return (
    <>
      <h1>Seach</h1>
      <hr />
      <div className="row">

        <div className="col-5">
          <h4>Seaching</h4>
          <hr />
          <form onSubmit={ onSubmitSearch } >
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText } 
              onChange={ onInputChange }
            />
            <button
              className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            // ( q === '' )
            // ? <div className="alert alert-primary"> Seach Hero</div>
            // : ( heroes.length === 0 )
            //   && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
          }
          <div 
            className="alert alert-primary" 
            style={{display: showTitle ? '' : 'none' }}
            >Seach Hero
          </div>
          <div 
            className="alert alert-danger"
            style={{display: showError ? '' : 'none' }}
            >No hero with <b>{ q }</b>
          </div>
          
          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } {...hero } />
            ) )
          }
        </div>
      </div>
    </>
  )
}
