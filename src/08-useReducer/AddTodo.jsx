import { useForm } from '../hooks/useForm'

export const AddTodo = ({ onNewTodo }) => {

    const  { desc, onResetForm, onInputChange } = useForm( {
        desc: ''
    } )

    const onFormSubmit = ( e ) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            desc,
        }
        onNewTodo(newTodo)
        onResetForm()
    }



  return (
    <form onSubmit={ onFormSubmit }>
    <input 
        type="text"
        placeholder="Vamos a buscar las esferas del Dragon"
        className="form-control"
        name='desc'
        value={ desc }
        onChange={ onInputChange }
    />
    <button
        type="submit"
        className="btn mt-2 btn-outline-primary"
    >Add
    </button>
</form>
  )
}
