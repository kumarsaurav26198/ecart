import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./reducers/cartReducers";
import { wishlistReducers } from "./reducers/wishlistReducers";

export default configureStore({
    reducer: {
        wishlistReducers: wishlistReducers,
        cartReducers: cartReducers
    },
});