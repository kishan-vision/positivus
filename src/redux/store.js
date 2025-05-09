import { configureStore } from "@reduxjs/toolkit";
import pageSlice from './slices/page';

export const store = configureStore({
    reducer: {
        page: pageSlice
    },
});
