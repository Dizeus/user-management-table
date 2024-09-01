import UsersService from "../../../services/users-service/users-service";
import { AppThunk } from "../../store";
import { setIsLoading, setUsers } from "./users-slice";

export const getUsersThunk =
  (name: string, username: string, email: string, phone: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const res = await UsersService.fetchUsers(name, username, email, phone);
      dispatch(setUsers(res.data));
    } catch (err) {
      console.error(err);
    }finally{
      dispatch(setIsLoading(false));
    }
  };
