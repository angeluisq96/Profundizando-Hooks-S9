import { useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"

export const HeroPage = () => {
  const { id } = useParams()
  
  const hero = useMemo(() => getHeroById( id ), [ id ]) 
  
  const navigate = useNavigate()
  
  const onNavigateBack = () => {
    navigate(-1)
  }

  return (
    <div 
    className="row mt-5 animate__animated animate__rubberBand">
      <div className="col-4">
        <img 
          src={ `/assets/heroes/${ id }.jpg` }
          alt={ hero.superhero } 
          className='img-thumbnail'/>
        <div className="col-8">
          <h3>{ hero.superhero }</h3>
          <ul className="lisg-group list-group-flush">
            <li className="list-group-item">{ hero.alter_ego }</li>
            <li className="list-group-item">{ hero.publisher }</li>
            <li className="list-group-item">{ hero.first_appearance }</li>
          </ul>
          <button
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }>
            Back
          </button>
        </div>
      </div>
    </div>
  )
}
