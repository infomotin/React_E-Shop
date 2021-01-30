import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import reduxThunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers, productDetailsReducers } from './reducers/productReducers'
import { cartReducers } from './reducers/cartReducers'

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cartList: cartReducers,
})

// //if cart items are store in local variable in can retripe from local stoare else set to inital default 
// // is the key from store cartItems  localStorage.setItem(
//     "cartItems",
//     JSON.stringify(getState().cartList.cartItems)

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []


const initialState = {
    cart: { cartItems: cartItemsFromStorage },
}
const middleware = [reduxThunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)



export default store