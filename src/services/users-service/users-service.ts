import { AxiosResponse } from "axios";
import api from "../api";
import { IUser } from "../../utils/types/IUser";

export default class UsersService {
  static fetchUsers(
    name: string = "",
    username: string = "",
    email: string = "",
    phone: string = ""
  ): Promise<AxiosResponse<IUser[]>> {
    return new Promise((resolve) => {
      setTimeout(() =>
        resolve(
          api.get<IUser[]>("/users", {
            params: {
              name_like: name,
              username_like: username,
              email_like: email,
              phone_like: phone,
            },
          })
        ), 1500
      );
    });
  }
}
