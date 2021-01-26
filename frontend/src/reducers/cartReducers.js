import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_ERROR } from '../constants/cartConstance'
export const cartReducers = (state = {
    cartItems: [],
}, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            // this is new items 
            const item = action.payload
                // if old cart are exicets 
            const exitItem = state.cartItems.find(x => x.product === item.product)
            if (exitItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === exitItem.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            return state
        case CART_ERROR:
            return state
        default:
            return state
    }
}