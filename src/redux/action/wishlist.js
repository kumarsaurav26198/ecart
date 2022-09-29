import { ActionTypes } from "../constants/actiontypes";



export const addItemToWishlist = data => ({
    type: ActionTypes.ADD_TO_WISHLIST,
    payload: data
});


export const removeFromWishlist = index => ({
    type: ActionTypes.REMOVE_FROM_WISHLIST,
    payload: index
});