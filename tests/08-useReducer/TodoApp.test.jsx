import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock('../../src/hooks/useTodo')
    

describe('Tests sobre el TodoApp', () => {
    
    useTodo.mockReturnValue( {
        toDos: [
            { id: 1, desc: 'Vamos a buscar las Esferas del Dragon', done: false },
            { id: 2, desc: 'Milk tengo hambre', done: false }
        ],
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        countTodo: 2,
        countPendingTodo: 1
    } )

    test('Debe de mostrar el compononte ', () => { 
    
        render( <TodoApp /> )
        expect( screen.getByText('Vamos a buscar las Esferas del Dragon') ).toBeTruthy() ;

    } )


} ) ;