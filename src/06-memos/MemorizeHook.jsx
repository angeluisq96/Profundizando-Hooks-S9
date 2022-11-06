import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"

const heavyStuff = ( number ) => {
  for ( let i = 0 ; i < number ; i++ ) {
    console.log (`Pikachu`)
  }
  return `${ number } de Pikachus 🥺 `
}

export const MemorizeHook = () => {

  const { counter, increment } = useCounter(1)
  const [ show, setShow ] = useState(true)

  // Memorizo el resultado de la funcion y no hagon ningun cambio hasta que el counter sea modificadio
  // Para evitar el lanzamiento de la funcion cuando no es necesario 
  // Al haber alguna modificacion en el padre 

  const memorizedValue = useMemo( () => heavyStuff(counter), [counter])

  return (
    <>
      <h1>Counter: <small>{ counter }</small></h1>


        <h4>{ memorizedValue }</h4>


      <button 
        className="btn btn-primary" 
        disabled={ show }
        onClick={ () => increment() } 
        > +1 
      </button>
      <button 
        className="btn btn-outline-primary" 
        onClick={ () => setShow(!show) } 
        >Show/Hide{ JSON.stringify(show) }
      </button>
    </>
  )
}
