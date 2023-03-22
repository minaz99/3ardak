import { configureStore } from "@reduxjs/toolkit";
import RegisterUserSlice from "./API calls/RegisterUserSlice";
export default configureStore({
  reducer: {
    registerUserSlice: RegisterUserSlice,
  },
});
