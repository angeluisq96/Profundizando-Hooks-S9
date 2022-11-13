import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export const HomePage = () => {
    
  const { user } = useContext( UserContext )
    return (
      <>
          <h1>Home Page</h1>
          <h2>Irasshaimase { user?.name }</h2>
          <hr />
      </>
    )
  }
  