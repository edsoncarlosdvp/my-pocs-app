import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./ClientSlice";

export default configureStore({
  reducer: {
    user: useReducer,
  },
});
