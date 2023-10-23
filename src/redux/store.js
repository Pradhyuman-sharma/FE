import { configureStore } from '@reduxjs/toolkit'
import authTokenReducer from "./reducers"
export const store = configureStore({
  reducer: {
    authToken:authTokenReducer
  },
})  