import { combineReducers } from "redux";
import { colorSlice } from "./color/colorSlice";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
    color: colorSlice.reducer
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type IRootState = ReturnType<typeof reducers>