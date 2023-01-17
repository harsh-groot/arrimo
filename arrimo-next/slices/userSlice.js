import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  jwt: "",
  username: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
});

export const { actions, reducer } = userSlice;
