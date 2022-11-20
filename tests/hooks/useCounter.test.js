const { renderHook, act } = require("@testing-library/react");
// const {  } = require("react-dom/test-utils");
const { useCounter } = require("../../src/hooks/useCounter");

describe('useCounter', () => { 
    test('Debe retornar los valores por defecto', () => {
        const { result } = renderHook( () => useCounter() )
        const { counter } = result.current ;
        expect( counter ).toBe(0)
    } ) ;

    test('Debe retornar un 100', () => {
        const { result } = renderHook( () => useCounter(100) )
        const { counter, increment, decrement, reset } = result.current ;
        expect( counter ).toBe(100)
    } ) ;

    test('Debe incrementar', () => {
        const { result } = renderHook( () => useCounter(1) )
        const { increment } = result.current ;
        act( () => {
            increment()
        } )
        expect( result.current.counter ).toBe(2)
    } ) ;

    test('Debe decrementar', () => {
        const { result } = renderHook( () => useCounter(2) )
        const { decrement } = result.current ;
        act( () => {
            decrement()
        } )
        expect( result.current.counter ).toBe(NaN)
    } ) ;

    test('Debe decrementar', () => {
        const { result } = renderHook( () => useCounter() )
        const { reset, decrement } = result.current ;
        act( () => {
            decrement()
            reset()
        } )
        expect( result.current.counter ).toBe(0)
    } ) ;
} ) ;