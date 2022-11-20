import { useEffect } from "react"

export const Message = () => {

    const onMoveMouse = ( { x, y } ) => {
        const coords = { x, y }; 
    }

    useEffect( () => {
        window.addEventListener( 'mousemove', onMoveMouse )
        return () => {
            window.removeEventListener( 'mousemove', onMoveMouse )
        }
    }, [] ) ;

  return (
    <>
        <h3>El usuaruo ya existe</h3>
    </>
  )
}
