import { configureStore } from "@reduxjs/toolkit";
import { alertReducer } from "./alertReducer";
import { preloaderReducer } from "./preloaderReducer";
import { languageReducer } from "./languageReducer";


export const store = configureStore({
    reducer: {
        alerts: alertReducer,
        preloader: preloaderReducer,
        language: languageReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});