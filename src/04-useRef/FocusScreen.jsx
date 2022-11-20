import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select()
        console.log(inputRef)
    }

  return (
    <>
    <h1>
        Focus Screen
    </h1>
    <input className="form-control" type="text" placeholder="Nombre" ref={ inputRef } />
    <button className="btn bnt-primary mt-2" onClick={ onClick } >Focus</button>
    </>
  )
}
