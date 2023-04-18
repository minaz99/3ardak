import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSuccess: false,
  isFetching: false,
  isError: false,
};

export const makeOffer = createAsyncThunk(
  "/home/user/id/request/id/offer",
  async ({ token, id, reqID, description }, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:8080/home/user/` +
          id +
          `/request/` +
          reqID +
          "/offer",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            description,
          }),
        }
      );
      
      //let data = await response.json();
      //return { ...data }; //console.log(data.token);
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const makeOfferSlice = createSlice({
  name: "makeOffer",
  initialState,
  reducers: {},
  extraReducers: {
    [makeOffer.pending]: (state, { payload }) => {
      state.isFetching = true;
    },

    [makeOffer.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;

      // state.requests = payload.requests;
      // state.requestsCount = payload.requestsCount;
      // alert(
      // "Reqs count: " + state.requestsCount + " requests:" + state.requests
      //);
      console.log("Fetching success");
    },
    [makeOffer.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = true;
      console.log("Fetching failed Failed");
    },
  },
});

export default makeOfferSlice.reducer;
