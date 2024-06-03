// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart(state, action) {
            const { id, HotMerchImg, MerchIntro, Price,  count, selectedButton, } = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id && item.selectedButton === selectedButton);

            if (existingItem) {
                existingItem.count += count; // 如果商品已存在於購物車中，增加數量
            } else {
                state.cartItems.push({ id, HotMerchImg, MerchIntro, Price, count,selectedButton, });
            }
        },
        removeFromCart(state, action) {
            const { id, selectedButton } = action.payload;
            state.cartItems = state.cartItems.filter(item => !(item.id === id && item.selectedButton === selectedButton));
        },
        clearCart(state) {
            state.cartItems = [];
        }
    }
});

// 新增計算購買商品數量的函數
export const selectTotalQuantity = state => {
    return state.cart.cartItems.reduce((total, item) => total + item.count, 0);
};

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
