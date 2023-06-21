import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  login: localStorage.getItem("login"),
};

export const counterSlice = createSlice({
  name: "counterr",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.cart.push(action.payload);
    },
    isLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { addTocart, isLogin } = counterSlice.actions;

export default counterSlice.reducer;
