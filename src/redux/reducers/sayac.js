import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const sayac = createSlice({
  name: "sayac",
  initialState,
  reducers: {
    increment: (state, action) => {
      action.payload = 1;
      state.value += action.payload;
    },
    decrement: (state, action) => {
      action.payload = 1;
      state.value -= action.payload;
    },
    incrementByTwo: (state, action) => {
      action.payload = 2;
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByTwo } = sayac.actions;
export default sayac.reducer;
