import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesRequests: [],
  isSuccess: false,
  isFetching: false,
  isError: false,
};

export const getCategoriesRequests = createAsyncThunk(
  "/requests/categories",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:8080/requests/categories`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      return { ...data }; //console.log(data.token);
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const getCategoriesRequestsSlice = createSlice({
  name: "categoriesRequests",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategoriesRequests.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [getCategoriesRequests.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      console.log("Fetching successfull");
    },
    [getCategoriesRequests.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = true;
      console.log("Fetching failed Failed");
    },
  },
});

export default getCategoriesRequestsSlice.reducer;
