import React from "react"

export const Small = React.memo( ( { value } ) => {

    console.log('Me dibujo cada vez que cambio hay cambio en el componente ')

  return (
    <small>{ value }</small> 
  )
} ) ;

// Con memo evito que el componente se redibuje a efecto de un cambio en el Padre. 
// Hara que no se redibuje a menos de que haya un cambio en el, 
// Util para cuando tenemos componentes pesados en redibujar y que no son frecuentes de recargar. 
// Usar solo cuando creamos necesario