import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './router/AppRouter'
import { store } from './store/store'
import { Apptheme } from './theme'


export const JournalApp = () => {
  return (
    <Provider store={ store } >
      <Apptheme>
        <AppRouter />
      </Apptheme>
    </Provider>
  )
}
