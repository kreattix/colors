import { configureStore } from "@reduxjs/toolkit";
import { colorReducer } from "./features/color-slice";

export const store = configureStore({
  reducer: {
    colorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
