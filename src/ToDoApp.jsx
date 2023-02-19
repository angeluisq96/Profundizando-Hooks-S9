import { useState } from "react";
import { useGetToDoByIdQuery, useGetToDosQuery } from "./store/apis/toDosApi"

export const ToDoApp = () => {

  //  const { data, isLoading } = useGetToDosQuery();
  
  const [ toDo, setToDo ] = useState(1)

  const { data, isLoading } = useGetToDoByIdQuery(toDo);
  
  // const prevToDo = () => { setToDo(toDo - 1)}
  const prevToDo = () => { 
    if ( toDo === 0 ) return; 
    setToDo(toDo - 1)
  }
  
  const nextToDo = () => { setToDo(toDo + 1) }

  console.log(data)
  return (
    <>
      <h1>ToDos - RTK Query</h1>
      <hr />

      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

      <pre>{ JSON.stringify( data ) }</pre>

      {/* <ul>
        {
          data.map( ({ title, userId }) => (
            <li key={userId}>
              { title }
            </li>
          ) )
        }
      </ul> */}

      <button onClick={ prevToDo }>
        PrevToDo
      </button>
      <button onClick={ nextToDo }>
        NextToDo
      </button>
    </>
  )
}
