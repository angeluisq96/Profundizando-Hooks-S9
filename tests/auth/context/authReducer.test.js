import { authReducer, types } from "../../../src/auth";

describe('authReducer', () => { 
    
    test('Debe retornar los valores por defecto', () => {
        const result = authReducer({ logged: false }, {} )
        expect( result ).toEqual({ logged: false })
    } ) ;
    
    test('Debe llamar el login y autenticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Wolverine',
                id: 1,
            }
        }
        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        })
    } ) ;

    test('Debe llamar el logout borrar el nombre del usuario y logged en falso', () => {
        const action = {
            type: types.logout,
        }
        const state = authReducer({ logged: true }, action);
        expect( state ).toEqual({
            logged: false,
        })
    } ) ;

} ) ;