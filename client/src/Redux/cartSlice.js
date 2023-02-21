import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const cartItem = state.cart.find(
        (cart) => cart._id === action.payload._id
      );
      if (cartItem) {
        cartItem.cartAmount = cartItem.cartAmount + 1;
      } else {
        state.amount = state.amount + 1;
        state.cart.push({ ...action.payload, cartAmount: 1 });
      }
      console.log(state.cart[0]);
    },
    increment(state, action) {
      const cartItem = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      state.cart[cartItem].cartAmount = state.cart[cartItem].cartAmount + 1;
      console.log(cartItem);
    },
    decrement(state, action) {
      const cartItem = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cart[cartItem].cartAmount > 0) {
        state.cart[cartItem].cartAmount = state.cart[cartItem].cartAmount - 1;
      } else {
        return;
      }
    },
    remove(state, action) {},
  },
});

export const { add, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;
