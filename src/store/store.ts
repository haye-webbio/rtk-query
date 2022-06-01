import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { blackfridayApi } from './blackfridayApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export function makeStore() {
  return configureStore({
     reducer: {
    [blackfridayApi.reducerPath]: blackfridayApi.reducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blackfridayApi.middleware),
  })
}



const store = makeStore()

setupListeners(store.dispatch)

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
