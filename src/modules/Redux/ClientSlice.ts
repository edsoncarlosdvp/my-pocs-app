import { createSlice } from "@reduxjs/toolkit";

interface ClientSliceProps {
  name: string;
  initialState: {
    name: string;
    isLogged: boolean;
  };
}

export const ClientSlice = createSlice({
  name: "user",
  initialState: {
    name: "T",
    isLogged: false,
  },
  reducers: {
    loginClient(state, { payload }) {
      return { ...state, isLogged: true, name: payload };
    },
    logoutClient(state) {
      return { ...state, isLogged: false, name: "" };
    },
  },
});

export const { loginClient, logoutClient } = ClientSlice.actions;
export const selectClient = (state: ClientSliceProps) => state.name;
export default ClientSlice.reducer;
