import { CART_ADD_ITEM, CART_REMOVE_ITEM,CART_ERROR} from '../constants/cartConstance'
import axios from 'axios'
//getState come from store ....
//dstructure data {data}
export const addToCart =(id,qty) =>async(dispatch,getState) =>{
    try{
        //if this actions success 
        dispatch({type:CART_ADD_ITEM})
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch({
            payload:{
                product:data._id,
                name:data.name,
                image:data.image,
                price:data.price,
                countInStock:data.countInStock
            }
        })

    }
    catch(error){
        dispatch({
            type: CART_ERROR,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }






    
    
}