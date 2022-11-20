import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Tests useReducer', () => { 

    const initialState = [ {
        id: 1,
        desc: 'Vamos a buscar las Esferas del Dragon',
        done: false
    } ]

    test('Test to initialState', () => {
        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState )
    } ) ;

    test('Add to do', () => {
        const action = {
            type: 'addTodo',
            payload: {
                id: 2, 
                desc: 'Encontremos el radar del Dragon',
                done: false
            }
        } ;
        const newState = todoReducer( initialState, action ) ;
        expect( newState ).toContain( action.payload ) ;
        expect( newState.length ).toBe( 2 ) ;
    } ) ;

    test('Delete to do', () => {
        const action = {
            type: 'deleteTodo',
            payload: 1
        } ;
        const newState = todoReducer( initialState, action ) ;
        expect( newState.length ).toBe( 0 ) ;
    } ) ;

    test('Toggle to do', () => {
        const action = {
            type: 'toggleTodo',
            payload: 1
        } ;
        
        const newState = todoReducer( initialState, action ) ;
        expect( newState[0].done ).toBeTruthy();
    } ) ;

} ) ;