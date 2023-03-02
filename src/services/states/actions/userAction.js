import axios from 'axios'
import { setUser } from '../slices/userSlice';

const url = "https://api.github.com/users/omariosouto";


export const fetchUser = () => async dispatch => {
    try {
        const response = await axios.get(url)
        const user = response.data
        dispatch(setUser(user))
        
    } catch (error) {
        console.log("Deu o erro", error) 
    }

}