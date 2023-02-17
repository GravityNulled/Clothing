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
      const cartItem = state.cart.find((cart) => cart.id === action.payload.id);
      if (cartItem) {
        cartItem.amount = cartItem.amount + 1;
      } else {
        state.amount = state.amount + 1;
        state.cart.push({ ...action.payload });
      }
    },
    increment(state, action) {
      const cartItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[cartItem].amount = state.cart[cartItem].amount + 1;
      console.log(cartItem);
    },
    decrement(state, action) {
      const cartItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[cartItem].amount > 0) {
        state.cart[cartItem].amount = state.cart[cartItem].amount - 1;
      } else {
        return;
      }
    },
    remove(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { add, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;
