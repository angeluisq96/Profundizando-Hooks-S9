import { configureStore } from '@reduxjs/toolkit'
import { toDosApi } from './apis/toDosApi'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    [toDosApi.reducerPath]: toDosApi.reducer,
  },
  middleware: (getDefaultMiddelware) => getDefaultMiddelware()
    .concat( toDosApi.middleware )
})