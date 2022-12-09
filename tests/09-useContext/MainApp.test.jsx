import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { MainApp } from "../../src/09-useContext/MainApp"

describe('Tests en MainApp', () => {
    test('debe de mostar el main app', () => { 
        
        render(
            <MemoryRouter >
                <MainApp />
            </MemoryRouter>
        )
        expect( screen.getByText('Main App') )
     })

     test('debe de mostar el login app', () => { 
        
        render(
            <MemoryRouter initialEntries={['/login']} >
                <MainApp />
            </MemoryRouter>
        )
        expect( screen.getByText('LoginPage') )
     })
})