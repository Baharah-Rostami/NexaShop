import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: []
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action) =>{
            const existing = state.items.find(i => i.id === action.payload);
            if(existing){
                existing.quantity++;
            }else{
                state.items.push({id: action.payload, quantity: 1});
            }
        },
        increaseQty: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) item.quantity++;
        },
          decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity--;
      state.items = state.items.filter(i => i.quantity > 0);
    },
    removeItem: (state, action)=> {
        state.items = state.items.filter(i=> i.id !== action.payload);
    },
    clearCart: (state) => {
        state.items = [];
    }
    }
});
export const {addToCart, increaseQty, decreaseQty, removeItem} = cartSlice.actions;
export default cartSlice.reducer;