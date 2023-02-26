import { configureStore } from '@reduxjs/toolkit';
import cartslice from './cart-slice';
import cartui from './ui-slice';

const store = configureStore({
  reducer: {
    ui: cartui.reducer,
    cartslice: cartslice.reducer,
  },
});

export default store;
