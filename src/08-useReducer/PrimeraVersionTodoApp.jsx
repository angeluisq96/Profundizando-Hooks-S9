import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(), 
        desc: 'Conseguir la esfera de una estrella',
        done: true
    },
    {
        id: new Date().getTime() * 3, 
        desc: 'Conseguir la esfera de dos estrellas',
        done: true
    },
]

export const TodoApp = () => {

    // Con esto aparecen como hooks en el componente como si fuese un state 

    const [toDos, dispatch] = useReducer( todoReducer, initialState )
    return (
        <>
            <h1>Todo App 🤯</h1>
            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        {
                            toDos.map( toDo => (
                                <li key={ toDo.id } className="list-group-item d-flex justify-content-between">
                                    <span className="align-self-center">Esfera del Dragon de una estrella </span>
                                    <button className="btn btn-danger">Quitar</button>
                                </li>

                            ) )
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar ToDo</h4>
                    <hr />
                    <form>
                        <input 
                            type="text"
                            placeholder="Vamos a buscar las esferas del Dragon"
                            className="form-control"
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary"
                        >Add
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
