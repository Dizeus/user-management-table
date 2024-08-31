import UsersService from "../../../services/users-service/users-service";
import { AppThunk } from "../../store";
import { setUsers } from "./users-slice";

export const getUsersThunk = (): AppThunk => async (dispatch) => {
  try {
    const res = await UsersService.fetchUsers()
    dispatch(setUsers(res.data))
  } catch (err) {
    console.error(err);
  }
};
