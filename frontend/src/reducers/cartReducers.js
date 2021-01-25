import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'
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
                    cartItems: state.cartItems.map(x => x.product === exicets.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        default:
            return state
    }
}