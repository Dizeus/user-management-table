import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersState } from "../../../utils/types/states/IUsersState";
import { IUser } from "../../../utils/types/IUser";

const initialState: IUsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
  },
});

export const {
  setUsers
} = usersSlice.actions;
export default usersSlice.reducer;
