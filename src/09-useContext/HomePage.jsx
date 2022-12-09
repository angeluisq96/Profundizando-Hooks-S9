import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export const HomePage = () => {
    
  const { user } = useContext( UserContext )
    return (
      <>
          <h1>Home Page</h1>
          <h2
          aria-label="pre"
          >Irasshaimase { user?.name }</h2>
          <hr />
      </>
    )
  }
  