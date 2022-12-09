import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Tests em LoginPage', () => {
    test('Debe mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={ { user: null } }>
                <LoginPage />
            </UserContext.Provider>
        )
        screen.debug();
        const preUSer = screen.getByLabelText('pre');
        expect( preUSer.innerHTML ).toEqual( 'null' )

    });
    
    test('Debe llamar el setUSer cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={ { user: null, setUser: setUserMock } }>
                <LoginPage />
            </UserContext.Provider>
        )
        const buttonElement = screen.getByRole('button') ;
        fireEvent.click( buttonElement ) ;
        expect( setUserMock ).toHaveBeenCalledWith({"id": 1, "name": "Naruto", "rango": "Hokage"})
    });
});