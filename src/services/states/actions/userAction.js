import axios from 'axios'
import { setUser } from '../slices/userSlice';

const url = "https://api.github.com/users/";


export const fetchUser = (user) => async dispatch => {
    try {
      const response = await axios.get(url+ user)
      const userRes = response.data
      dispatch(setUser(userRes))
    } catch (error) {
      throw error
    }   
  }
  