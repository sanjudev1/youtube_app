import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";
const store =configureStore({
    reducer:{
        app:appSlice,
        search:cacheSlice
    }
   
})

export default store