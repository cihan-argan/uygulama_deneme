import { configureStore } from "@reduxjs/toolkit";
import { sayac } from "./sayac";
const store = configureStore({
  reducer: {
    counter: sayac.reducer,
  },
});
export default store;
