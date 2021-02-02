import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import reduxThunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers, productDetailsReducers } from './reducers/productReducers'
import { cartReducers } from './reducers/cartReducers'
import { userLoginReducers,userRegisterReducers } from './reducers/userReducers'

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cartList: cartReducers,
    userLogin:userLoginReducers,
    userRegister:userRegisterReducers,
})

// //if cart items are store in local variable in can retripe from local stoare else set to inital default 
// // is the key from store cartItems  localStorage.setItem(
//     "cartItems",
//     JSON.stringify(getState().cartList.cartItems)

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage }
}
const middleware = [reduxThunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)



export default store