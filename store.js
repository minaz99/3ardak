import { configureStore } from "@reduxjs/toolkit";
import RegisterUserSlice from "./API calls/RegisterUserSlice";
import LoginUserSlice from "./API calls/LoginUserSlice";
import CategoriesRequestsSlice from "./API calls/Requests/CategoriesRequestsSlice";
export default configureStore({
  reducer: {
    registerUserSlice: RegisterUserSlice,
    login: LoginUserSlice,
    categoryRequests: CategoriesRequestsSlice,
  },
});
