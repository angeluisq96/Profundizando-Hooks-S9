import { TodoList } from "./TodoList"
import { AddTodo } from "./AddTodo"
import { useTodo } from '../hooks/useTodo'

export const TodoApp = () => {

    const  { toDos, handleNewTodo, handleDeleteTodo, handleToggleTodo, countTodo, countPrndingTodo } = useTodo()
    return (
        <>
            <h1>Todo App 🤯</h1>
            <div className="row">
                <div className="col-7">
                    <TodoList list={ toDos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } />
                </div>
                <div className="col-5">
                    <h4>Agregar ToDo</h4>
                    <hr />
                    <AddTodo onNewTodo={ handleNewTodo } />
                </div>
                <h2>Numero de Esferas: { countTodo }</h2>
                <h2>Numero de Esferas: { countPrndingTodo }</h2>
            </div>
        </>
    )
}
