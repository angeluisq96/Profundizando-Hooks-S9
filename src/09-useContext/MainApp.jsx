import { Route, Routes, Navigate } from "react-router-dom"
import { AbautPage } from "./AbautPage"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"

export const MainApp = () => {
  return (
    <UserProvider >
        <h1>Main App</h1>
        <Navbar />

        <hr />

        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/about" element={ <AbautPage /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/*" element={ <Navigate to="/about" /> } /> {/* Para manejar las excepciones y que nos lleve a una ruta especifica */}
        </Routes>
    </UserProvider >
  )
}
