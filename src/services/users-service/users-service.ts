import { AxiosResponse } from "axios";
import api from "../api";
import { IUser } from "../../utils/types/IUser";

export default class UsersService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return api.get<IUser[]>("/users");
  }
}
