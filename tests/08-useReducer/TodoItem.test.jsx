import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

const initialState = [ {
    id: 1,
    desc: 'Vamos a buscar las Esferas del Dragon',
    done: false
} ]

const onToggleTodoMock = jest.fn()
const onDeleteTodoMock = jest.fn()

beforeEach( () => jest.clearAllMocks() ) ;

describe('TEsts en TodoItem', () => {

    test('Debe mostrar el ToDo pendiente de completar ', () => {
        render(
            <TodoItem 
                toDo={ initialState }
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock }
            />
        )

        const liElement = screen.getByRole('listitem') ;
        expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between' ) ;
        
        const spanElement = screen.getByLabelText('span') ;
        expect( spanElement.className ).toBe( 'align-self-center ' ) ;
        expect( spanElement.className ).toContain( 'align-self-center' ) ;
    } ) ;

    test('Debe mostrar el ToDo completado', () => {

        initialState.done = true
        render(
            <TodoItem 
                toDo={ initialState }
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock }
            />
        )

        const spanElement = screen.getByLabelText('span') ;
        expect( spanElement.className ).toContain( 'align-self-center' ) ;
    } ) ;

    test('Debe llamar el Toggle en el click', () => { 
        render(
            <TodoItem 
                toDo={ initialState }
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock }
            />
        )
        const spanElement = screen.getByLabelText('span') ;
        fireEvent.click( spanElement ) ;
        expect( onToggleTodoMock ).toHaveBeenCalledWith( initialState.id )
     })

    test('Debe llamar el delete al hacer click', () => { 
        render(
            <TodoItem 
                toDo={ initialState }
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock }
            />
        )
        const buttonElement = screen.getByRole('button') ;
        fireEvent.click( buttonElement ) ;
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( initialState.id )
     })



} ) ;