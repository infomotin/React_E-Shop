import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstance'
import axios from 'axios'
//getState come from store ....
export const addToCart =(id,qty) =>async()