
import { PropTypes } from "prop-types";

export const TodoItem = ({ toDo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span 
                className={`align-self-center ${ (toDo.done) ? 'text-decoration-line-through' : '' }`}
                onClick={ () => onToggleTodo(toDo.id) }
                > {toDo.desc} 
            </span>
            <button 
                className="btn btn-danger"
                onClick={ () => onDeleteTodo(toDo.id) }
            >Quitar
            </button>
        </li>
    )
}

TodoItem.propType = {
    desc: PropTypes.string,
    id: PropTypes.integer
}
