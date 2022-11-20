const { renderHook } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks/useCounter");

describe('useCounter', () => { 
    test('Debe retornar los valores por defecto', () => {
        const { result } = renderHook( () => useCounter )
        const { counter, increment, decrement, reset } = result.current ;

        expect( counter ).toBe(0)
    } ) ;
} ) ;