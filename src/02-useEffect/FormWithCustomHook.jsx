
import { useForn } from "../hooks/useForn";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, user, mail, pass } = useForn( {
        user: '',
        mail: '',
        pass: '',
    } )

  return (
    <>
        <h1>FormWithCustomHook</h1>
        <hr />
        <input type="text" className='form-control' placeholder='User' name='user' value={ user } onChange={ onInputChange } />
        <input type="text" className='form-control mt-2' placeholder='Email' name='mail' value={ mail } onChange={ onInputChange } />
        <input type="text" className='form-control mt-2' placeholder='Password' name='pass' value={ pass } onChange={ onInputChange } />
        <button className='btn btn-primary mt-2' onClick={ onResetForm } >Reset</button>
        {/* { user === 'Vegeta' && <Message /> } */}
    </>
  )
}
