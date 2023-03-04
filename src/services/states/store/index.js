import { configureStore } from "@reduxjs/toolkit";
import { fetchUser } from "../actions/userAction";
import ThemeReducer from '../slices/themeSlice'
import UserReducer from '../slices/userSlice'

const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        user: UserReducer
    },
}) 


export default store