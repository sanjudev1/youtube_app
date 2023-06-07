import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{isMenuOpen:true},
    reducers:{togglemenu:(state)=>{state.isMenuOpen=!state.isMenuOpen},closemenu:(state)=>{state.isMenuOpen=false}}
})
export const {togglemenu,closemenu} =appSlice.actions;
export default appSlice.reducer