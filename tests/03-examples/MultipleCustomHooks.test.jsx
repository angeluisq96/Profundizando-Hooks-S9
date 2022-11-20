import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch")
jest.mock("../../src/hooks/useCounter")

describe('Tests in <MultipleCustomHooks /> con mocks', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue( {
        counter: 1,
        increment: mockIncrement
    } ) ;

    beforeEach( () => {
        jest.clearAllMocks();
    } ) ;

    test('The defoult component test', () => { 

        useFetch.mockReturnValue( {
            data: null,
            isLoading: true,
            hasError: null
        } )

        render( <MultipleCustomHooks /> )
        expect( screen.getByText('loading...') )
        expect( screen.getByText('Breacking Bad') )
        const button = screen.getByRole('button', { name: 'Next Quote' })
        expect( button.disabled ).toBeTruthy() ;
    } ) ;

    test('Test result fetch', () => {
        useFetch.mockReturnValue( {
            data: [ { author: 'Vegeta', quote: 'Insectooooo' } ],
            isLoading: false,
            hasError: null
        } )
        render( <MultipleCustomHooks /> )

        expect( screen.getAllByText('Vegeta') ).toBeTruthy();
        expect( screen.getAllByText('Insectooooo') ).toBeTruthy();

        const button = screen.getByRole('button', { name: 'Next Quote' })
        expect( button.disabled ).toBeFalsy() ;
    } ) ;

    test('Call function increment', () => { 
        render( <MultipleCustomHooks /> )

        useFetch.mockReturnValue( {
            data: [ { author: 'Vegeta', quote: 'Insectooooo' } ],
            isLoading: false,
            hasError: null
        } )

        const button = screen.getByRole('button')
        fireEvent.click( button )
        expect( mockIncrement ).toHaveBeenCalled();

    } ) ;

} ) ;