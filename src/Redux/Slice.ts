import { createSlice, Reducer } from "@reduxjs/toolkit";

// Arquivo que armazena as Stores
interface typeProps {
  user: Reducer;
  name: string;
}

export const Slice = createSlice({
  name: "User",
  initialState: {
    name: "",
    isLogged: false,
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, isLogged: true, name: payload };
    },
    logout(state) {
      return { ...state, isLogged: false, name: "" };
    },
  },
});

export const { changeUser, logout } = Slice.actions;

export const selectUser = (state: typeProps) => state.user;

export default Slice.reducer;
