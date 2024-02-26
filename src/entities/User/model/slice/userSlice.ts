import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  value: number;
}

const initialState = {
  value: 0,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReduser } = userSlice;
