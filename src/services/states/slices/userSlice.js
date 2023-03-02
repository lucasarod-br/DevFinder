import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: 'user',
  initialState: {isLoading: true},
  reducers: {
    setUser: (state, {payload}) => ({ ...state, userSearched: payload, isLoading: false}),
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
