import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isError: false,
  isSuccess: true,
  isFetching: false,
};

export const registerUser = createAsyncThunk(
  "/register",
  async ({ fname, lname, email, password, phoneNumber, address }, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:8080/users`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
          phoneNumber,
          address,
        }),
      });
      let status = await response.status;
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const RegisterUserSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    logSomething: (state) => {
      console.log("reached here");
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export const { logSomething } = RegisterUserSlice.actions;
export default RegisterUserSlice.reducer;
