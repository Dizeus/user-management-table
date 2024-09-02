import { FC, memo } from "react";
import { IUser } from "../../../utils/types/IUser";
interface UserRowProps {
  user: IUser;
}
const UserRow: FC<UserRowProps> = ({user}) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  );
}

export default memo(UserRow, (prevProps, nextProps) => {
  return prevProps.user.id === nextProps.user.id;
});