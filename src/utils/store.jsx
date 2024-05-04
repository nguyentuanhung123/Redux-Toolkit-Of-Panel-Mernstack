import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"

const store = configureStore({
    reducer: {
        // slice
        cart: cartSlice
    }
})

export default store;