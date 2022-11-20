import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";


const initialForm = {
    shinobi: 'Sasuke',
    eye: 'Sharingan'
}

describe('useForm', () => {
    test('debe traer los valores por defecto', () => { 
        const{ result } = renderHook( () => useForm(initialForm) ) ;
        // console.log(result.current)
        expect(result.current).toEqual( {
            shinobi: initialForm.shinobi,
            eye: initialForm.eye,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        } );
    } ) ;

    test('Debe cambiar el nombre del formulario', () => {
        const newShinobi = 'Shikamaru'
        const { result } = renderHook( () => useForm(initialForm) ) ;
        const { onInputChange } = result.current ;
        act( () => {
            onInputChange( { target: { name: 'shinobi', value: newShinobi } } )
        } ) ;
        expect(result.current.shinobi).toBe(newShinobi)
        expect(result.current.formState.shinobi).toBe(newShinobi)
    } ) ;

    test('Debe reiniciar el formulario', () => {
        const newShinobi = 'Shikamaru'
        const { result } = renderHook( () => useForm(initialForm) ) ;
        const { onInputChange, onResetForm } = result.current ;
        act( () => {
            onInputChange( { target: { name: 'shinobi', value: newShinobi } } ) ;
            onResetForm();
        } ) ;
        expect(result.current.shinobi).toBe(initialForm.shinobi)
        expect(result.current.formState.shinobi).toBe(initialForm.shinobi)
    } ) ;



} ) ;