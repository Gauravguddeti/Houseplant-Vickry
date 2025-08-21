import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter(i => i.id !== id);
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== id);
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
