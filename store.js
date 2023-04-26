import { configureStore } from "@reduxjs/toolkit";
import RegisterUserSlice from "./API calls/RegisterUserSlice";
import LoginUserSlice from "./API calls/LoginUserSlice";
import CategoriesRequestsSlice from "./API calls/Requests/CategoriesRequestsSlice";
import MyRequestsSlice from "./API calls/Requests/MyRequestsSlice";
import MakeOfferSlice from "./API calls/Offers/MakeOfferSlice";
import MyOffersSlice from "./API calls/Offers/MyOffersSlice";
import OffersPerRequestSlice from "./API calls/Offers/OffersPerRequestSlice";
import MakeRequestSlice from "./API calls/Requests/MakeRequestSlice";
import AcceptOfferSlice from "./API calls/Offers/AcceptOfferSlice";
import RejectOfferSlice from "./API calls/Offers/RejectOfferSlice";
export default configureStore({
  reducer: {
    registerUserSlice: RegisterUserSlice,
    login: LoginUserSlice,
    categoryRequests: CategoriesRequestsSlice,
    myRequests: MyRequestsSlice,
    makeOffer: MakeOfferSlice,
    myOffers: MyOffersSlice,
    offersPerRequest: OffersPerRequestSlice,
    makeRequest: MakeRequestSlice,
    acceptOffer: AcceptOfferSlice,
    rejectOffer: RejectOfferSlice,
  },
});
