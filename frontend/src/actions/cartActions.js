import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_ERROR,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstance";
import axios from "axios";
//getState come from store ....
//dstructure data {data}
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartList.cartItems)
  );
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartList.cartItems)
  );
};


export const saveShippingAdress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem(
    "SHIPPINGaDDRESS",
    JSON.stringify(data)
  );
};
//try{
//     //if this actions success
//     dispatch({type:CART_ADD_ITEM})
//     const {data} = await axios.get(`/api/products/${id}`)
//     dispatch({
//         payload:{
//             product:data._id,
//             name:data.name,
//             image:data.image,
//             price:data.price,
//             countInStock:data.countInStock,
//             qty
//         }
//     })

//     localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))

// }
// catch(error){
//     dispatch({
//         type: CART_ERROR,
//         payload: error.response && error.response.data.message ?
//             error.response.data.message : error.message,
//     })
// }
