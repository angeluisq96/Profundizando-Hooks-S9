
import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from '../../src/09-useContext/HomePage'

describe('Pruebas en HomePage', () => {

    const user = {
        id: 1,
        name: 'Vegetta'
    }

    test('Debe traer el main sin el user', () => { 
        render(
            <UserContext.Provider value={ { user: null } }>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'Irasshaimase ' );
     })

     test('Debe traer el main con el user', () => { 
        render(
            <UserContext.Provider value={ { user } }>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'Irasshaimase ' + user.name );
     })
} )