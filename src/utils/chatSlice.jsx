import { createSlice } from "@reduxjs/toolkit";

const chatSlice= createSlice({
    name: "livechat",
    initialState:[],
    reducers:{Addmessages:(state,action)=>{
        state.unshift(action.payload)
        if(state.length>25){
            state.pop()
        }
    }}
      
  
})
export const {Addmessages}=chatSlice.actions
export default chatSlice.reducer