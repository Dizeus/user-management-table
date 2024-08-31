import { useTypedSelector } from "../../../utils/hooks/useTypedSelector";
import { IUser } from "../../../utils/types/IUser";
import UserRow from "../../molecules/UserRow/UserRow";
import style from "./UserTable.module.scss";

const UserTable = () => {
  const users = useTypedSelector((state) => state.users.users);
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: IUser) => (
          <UserRow user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
