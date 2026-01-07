import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isOpen: false,
  nextId: 1
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push({
        ...action.payload,
        cartId: state.nextId
      });
      state.nextId += 1;
    },
    removeItem(state, action) {
      const index = state.items.findIndex(
        (item) => item.cartId === action.payload
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearCart(state) {
      state.items = [];
    },
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    }
  }
});

export const {
  addItem,
  removeItem,
  clearCart,
  openCart,
  closeCart,
  toggleCart
} = cartSlice.actions;

export default cartSlice.reducer;
