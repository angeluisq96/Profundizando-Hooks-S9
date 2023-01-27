import { types } from "../../../src/auth"



describe('Pruebas de los Types', () => { 
  test('Debe regresar estos Types', () => { 
    expect( types ).toEqual( {
        login:  '[Auth] Login',
        logout: '[Auth] Logout',
    })
   })
 })