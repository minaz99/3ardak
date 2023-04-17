import { configureStore } from "@reduxjs/toolkit";
import RegisterUserSlice from "./API calls/RegisterUserSlice";
import LoginUserSlice from "./API calls/LoginUserSlice";
import CategoriesRequestsSlice from "./API calls/Requests/CategoriesRequestsSlice";
import MyRequestsSlice from "./API calls/Requests/MyRequestsSlice";
export default configureStore({
  reducer: {
    registerUserSlice: RegisterUserSlice,
    login: LoginUserSlice,
    categoryRequests: CategoriesRequestsSlice,
    myRequests: MyRequestsSlice,
  },
});
