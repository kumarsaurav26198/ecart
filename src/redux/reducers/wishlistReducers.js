import { ActionTypes } from '../constants/actiontypes';

export const wishlistReducers = (state = [], action) => {
    switch (action.type)
    {
        case ActionTypes.ADD_TO_WISHLIST:
            //logic for ADD_TO_WISHLIST
            console.warn("  ADD_TO_WISHLIST Reducers", ActionTypes.ADD_TO_WISHLIST);
            return [...state, action.payload];

        case ActionTypes.REMOVE_FROM_WISHLIST:
            //logic for REMOVE_FROM_WISHLIST

            console.warn("  REMOVE_FROM_WISHLIST Reducers", ActionTypes.REMOVE_FROM_WISHLIST);
            const deleteArry = state.filter((item, index) => {
                return index !== action.type.payload;
            });

            return deleteArry;
        default:
            return state;
    }
};



