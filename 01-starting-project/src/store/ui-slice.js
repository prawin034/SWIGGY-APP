import { createSlice } from '@reduxjs/toolkit';

const cartui = createSlice({
  name: 'ui-slice',
  initialState: { cartvisible: false },
  reducers: {
    toggle(state) {
      state.cartvisible = true;
    },
    toggleclose(state) {
      state.cartvisible = false;
    },
  },
});

export const uiActions = cartui.actions;
export default cartui;
