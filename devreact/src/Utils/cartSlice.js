import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[1,2,3]
    },
    reducers:{
        addItem:(state,action)=>{
          state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items=[];
        },
    },
});

export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;


// ------------STRUCTURE OF OBJECT RETURNED BY createSlice ------------

// cartSlice={     
//     actions:{
//         addItem,
//         removeItem,
//         clearCart,
//     },
//     reducer:reducers,
    
// }