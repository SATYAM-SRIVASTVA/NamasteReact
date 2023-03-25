import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const Store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default Store;

/**
 *
 *      createStore-
 *                  configureStore({})     -RTK
 *
 *
 *
 *      Provide my store to App-
 *                              <Provider store={Store}>    -import from react-redux
 *
 *
 *
 *      Slice-(provided by RTK)
 *
 *            createSlice({
 *               name:"xyz",
 *               intialState:
 *               reducers:{
 *                 addItem:(state,action)=>{state=action.payload}
 *                 removeItem:(state,action)=>{state.action.payload}
 *                 clearCart:(state)=>{state=[]}
 *               }
 *            })
 *
 *      this reducers object will contain my actions and my reducer functions i.e.
 *      reducers corresponding to that actions
 *     
 * 
 *     export-
 *          
 *           export const {addItem,removeItem,clearCart} = cartSlice.actions;  (these are actions)
 *           export default cartSlice.reducer;   (it is the combination of all the reducers)
 * 
 *     put this slice into store-
 *           
 *            configureStore({
 *               reducer:{
 *                  cart:cartSlice,
 *                  user:userSlice,
 *                  profile:profileSlice, 
 *               }
 *            })
 * 
 */
