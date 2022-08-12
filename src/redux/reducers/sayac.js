import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const sayac = createSlice({
  name: "sayac",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByTwo: (state) => {
      state.value += 2;
    },
  },
});

export const { increment, decrement, incrementByTwo } = sayac.actions;
export default sayac.reducer;
