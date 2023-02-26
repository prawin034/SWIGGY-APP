import { createSlice } from '@reduxjs/toolkit';

const cartslice = createSlice({
  name: 'cart-slice',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newitem = action.payload;

      const exisitingitem = state.items.find((item) => item.id === newitem.id);
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newitem.price;
      if (!exisitingitem) {
        state.items.push({
          id: newitem.id,
          price: newitem.price,
          quantity: 1,
          totalprice: newitem.price,
          name: newitem.name,
        });
      } else {
        exisitingitem.quantity++;
        exisitingitem.totalprice = exisitingitem.totalprice + newitem.price;
      }
    },
    removeItemCart(state, action) {
      const id = action.payload;

      const exisitingitem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - exisitingitem.price;
      if (exisitingitem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisitingitem.quantity--;
        exisitingitem.totalprice =
          exisitingitem.totalprice - exisitingitem.price;
      }
    },
  },
});

export const cartactions = cartslice.actions;
export default cartslice;
