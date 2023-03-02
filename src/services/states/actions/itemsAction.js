import api from '../../services/api'
import { setItems } from '../slices/cartSlice'

const url = '0dbea73c-4768-4e6b-9c66-b82aaa592915'


export const fetchItems = () => async dispatch => {
    try {
        const response = await api.get(url)
        const items = response.data.items
        dispatch(setItems(items))
    } catch (error) {
        console.log("Deu o erro", error) 
    }

}