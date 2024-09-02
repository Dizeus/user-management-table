import { FC, memo } from "react";
import { IUser } from "../../../utils/types/IUser";
import UserRow from "../../molecules/UserRow/UserRow";
import UsersNotFound from "../../atoms/UsersNotFound/UsersNotFound";
import { deepCompare } from "../../../utils/helpers/deepCompare";
import WithLoading from "../WithLoading/WithLoading";

interface UserTableBodyProps {
  users: IUser[];
  isLoading: boolean;
}
const UserTableBody: FC<UserTableBodyProps> = ({ users, isLoading }) => {

  return (
    <>
      <WithLoading isLoading={isLoading}>
        <UsersNotFound usersLength={users.length}>
          {users.map((user: IUser) => (
            <UserRow user={user} key={user.id} />
          ))}
        </UsersNotFound>
      </WithLoading>
    </>
  );
};

export default memo(UserTableBody, (prevProps, nextProps) =>
  deepCompare(prevProps.users, nextProps.users)
);
