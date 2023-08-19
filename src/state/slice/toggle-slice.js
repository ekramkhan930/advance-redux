import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: { isCardVisible: false },
  reducers: {
    toggle: (state) => {
      state.isCardVisible = !state.isCardVisible;
    },
  },
});

export const toggleActions = toggleSlice.actions;

export default toggleSlice.reducer;
