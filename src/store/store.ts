import { combineReducers } from "redux";
import { colorSlice } from "./color/colorSlice";
import { configureStore } from "@reduxjs/toolkit";
import { colorNameApi } from "./api/colorNameApi";

const reducers = combineReducers({
    color: colorSlice.reducer,
    colorNameApi: colorNameApi.reducer
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
            .concat(colorNameApi.middleware)
})

export type IRootState = ReturnType<typeof reducers>