import { createSlice } from "@reduxjs/toolkit";


const cacheSlice =createSlice({
    name:"search",
    initialState:{},
    reducers:{userCache:(state,action)=>{
        // state=Object.assign(state,action.payload)
        return {...action.payload,...state}

    },clearCache:(state)=>{
        //const { [Object.keys(state).pop()]: _, ...newState}=state; return newState;
        //LRU Approach to improve the performance of the Application and maintain the store size balancing  
    let keys = Object.keys(state); 
    delete state[keys[keys.length-1]]}
}})
export const {userCache,clearCache}=cacheSlice.actions
export default cacheSlice.reducer