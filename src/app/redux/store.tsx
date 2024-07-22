import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import User from "../types/User";
import { THUNK_STATUS } from ".";

const API_ENDPOINT = process.env.API_ENDPOINT || "";

type ServerResponse = {
  response: string;
  data: User;
};

const initialState = {
  users: [] as User[],
  status: THUNK_STATUS.IDLE as THUNK_STATUS,
  error: undefined as undefined | string,
};

export const fetchUsers = createAsyncThunk<User[], void>(
  "users/fetchUsers",
  async () => {
    const response = await axios.get(API_ENDPOINT);
    return response.data;
  }
);

export const insertUser = createAsyncThunk<ServerResponse, User>(
  "users/insertUser",
  async (user: User) => {
    const response = await axios.post(API_ENDPOINT, user);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = THUNK_STATUS.PENDING;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = THUNK_STATUS.SUCCEEDED;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = THUNK_STATUS.FAILED;
        state.error = action.error.message;
      })
      .addCase(insertUser.pending, (state) => {
        state.status = THUNK_STATUS.PENDING;
      })
      .addCase(insertUser.fulfilled, (state, action) => {
        state.status = THUNK_STATUS.SUCCEEDED;
        state.users.push(action.payload.data);
      })
      .addCase(insertUser.rejected, (state, action) => {
        state.status = THUNK_STATUS.FAILED;
        state.error = action.error.message;
      });
  },
});

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
