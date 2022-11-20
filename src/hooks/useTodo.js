import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer"


export const useTodo = ( initialState = [] ) => {

    const init = () => {
        return JSON.parse( localStorage.getItem( 'todos' ) ) || [] ;
    }
    
    const [toDos, dispatch ] = useReducer( todoReducer, initialState, init )

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(toDos))
      }, [toDos])
  

    const handleNewTodo = (todo) => {
        const action = {
            type: 'addTodo',
            payload: todo
        }
        dispatch( action )
    }

    const handleDeleteTodo = ( id ) => {
        // console.log({id})
        dispatch( {
            type: 'deleteTodo',
            payload: id
        } )
    }

    const handleToggleTodo = ( id ) => {
        // console.log({id})
        dispatch( {
            type: 'toggleTodo',
            payload: id
        } )
    }

    return {
        ...toDos,
        toDos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        countTodo: toDos.length,
        countPrndingTodo: toDos.filter( todo => !todo.done ).length
    }
}
