import { Colors } from "@kreattix/colors";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ColorSliceState {
  currentColor: string;
}

const initialState: ColorSliceState = {
  currentColor: Colors.red[500],
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.currentColor = action.payload;
    },
  },
});

export const { setColor } = colorSlice.actions;
export const colorReducer = colorSlice.reducer;
