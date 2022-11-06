import { useState, useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [ formState, setFormState ] = useState( {
        user: '',
        email: ''
    } ) ;

    const { user, email } = formState

    const onInputChange = ( { target } ) => {
        const { name, value } = target
        setFormState( {
            ...formState,
            [ name ]: value
        } )
    }

  return (
    <>
        <h1>SimpleForm</h1>
        <hr />
        <input type="text" className='form-control' placeholder='User' name='user' value={ user } onChange={ onInputChange } />
        <input type="text" className='form-control mt-2' placeholder='Email' name='email' value={ email }/>
        { user === 'Vegeta' && <Message /> }
    </>
  )
}
