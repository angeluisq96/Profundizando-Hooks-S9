
import { TodoItem } from "./TodoItem";


export const TodoList = ( { list, onDeleteTodo, onToggleTodo } ) => {

    return (
        <ul className="list-group">
            {
                list.map( toDo => (  
                    <TodoItem 
                        onDeleteTodo={ onDeleteTodo }
                        toDo={ toDo }
                        key={ toDo.id } 
                        onToggleTodo={ onToggleTodo }
                    />
                ) )
            }
        </ul>
    )
}

