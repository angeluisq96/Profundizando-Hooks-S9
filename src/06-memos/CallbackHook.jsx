import React, { useCallback, useState } from 'react'
// import { useCounter } from '../hooks/useCounter';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

  const [ counter, setCounter ] = useState(1);
  const incrementCounter = useCallback(
    (value) => {
      setCounter( (c) => c + value )
    },
    [],
  )

  // Con el use callback memorizo la funciony evito que se ejecute otra vez
  
  return (
    <>
        <h1>Use Callback Hook: { counter }</h1>
        <hr />
        <ShowIncrement increment={ incrementCounter }/>
    </>
  )
}
