import { configureStore } from "@reduxjs/toolkit";
import RegisterUserSlice from "./API calls/RegisterUserSlice";
import LoginUserSlice from "./API calls/LoginUserSlice";
export default configureStore({
  reducer: {
    registerUserSlice: RegisterUserSlice,
    login: LoginUserSlice,
  },
});
