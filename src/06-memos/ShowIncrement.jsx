import React from 'react'

export const ShowIncrement = React.memo( ( { increment } ) => {

    console.log('Soy un boton y no me tengo que redibujar 🤪 ')

  return (
    <button
        className='btn btn-primary'
        onClick={ () => { increment( 5 ) } }
        >Increment
    </button>
  )
} )
