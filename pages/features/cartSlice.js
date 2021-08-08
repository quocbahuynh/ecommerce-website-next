import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload);
    },
    removeCart: (state, action) => {
      const removeItem = action.payload;
      state = state.filter((item) => item.info.slug != removeItem);
      return state;
    },
  },
});

export const { reducer, actions } = cartSlice;
export const { addCart, removeCart } = actions;
export default reducer;
