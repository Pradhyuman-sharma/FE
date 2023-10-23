import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const tokenSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    addToken: (state,action) => {
      state.value = action.payload;
    },
    removeToken: (state) => {
      state.value =null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToken, removeToken } = tokenSlice.actions

export default tokenSlice.reducer