import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: -1,
  token: "",
  isSuccess: false,
  isFetching: false,
  isError: false,
};

export const loginUser = createAsyncThunk(
  "/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:8080/auth/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      let data = await response.json();
      return { ...data }; //console.log(data.token);
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const loginUserSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.token = payload.token;
      state.id = payload.userID;
      alert("Token: " + state.token + " userID: " + state.id);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = true;
      console.log("Login Failed");
    },
  },
});

export default loginUserSlice.reducer;
