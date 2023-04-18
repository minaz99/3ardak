import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  requests: [],
  requestsCount: 0,
  isSuccess: false,
  isFetching: false,
  isError: false,
};

export const getMyRequests = createAsyncThunk(
  "/home/user/id/requests",
  async ({ token, id }, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:8080/home/user/` + id + `/requests`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      let data = await response.json();
      return { ...data }; //console.log(data.token);
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const getMyRequestsSlice = createSlice({
  name: "myRequests",
  initialState,
  reducers: {},
  extraReducers: {
    [getMyRequests.pending]: (state, { payload }) => {
      state.isFetching = true;
    },

    [getMyRequests.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;

      state.requests = payload.requests;
      state.requestsCount = payload.requestsCount;
      // alert(
      // "Reqs count: " + state.requestsCount + " requests:" + state.requests
      //);
      console.log("Fetching success");
    },
    [getMyRequests.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = true;
      console.log("Fetching failed Failed");
    },
  },
});

export default getMyRequestsSlice.reducer;
