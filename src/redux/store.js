import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import merchReducer from './merchCountSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        merchCount: merchReducer
    }
});

export default store;