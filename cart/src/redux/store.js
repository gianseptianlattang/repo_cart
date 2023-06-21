import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../components/card/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
