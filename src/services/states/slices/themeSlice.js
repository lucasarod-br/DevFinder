import { createSlice } from "@reduxjs/toolkit"

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { isDark: false },
  reducers: {
    toggle: state => ({ ...state, isDark: !state.isDark }),
  },
})

export const { toggle } = themeSlice.actions

export default themeSlice.reducer
