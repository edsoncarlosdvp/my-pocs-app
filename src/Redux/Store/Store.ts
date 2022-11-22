import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice";
// configura as stores
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
