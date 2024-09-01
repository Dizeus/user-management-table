import { useTypedSelector } from "../../../utils/hooks/useTypedSelector";
import { IUser } from "../../../utils/types/IUser";
import UserRow from "../../molecules/UserRow/UserRow";
import WithLoading from "../WithLoading/WithLoading";

const UserTableBody = () => {
  const {users, isLoading} = useTypedSelector((state) => state.users);

  return (
    <tbody>
      <WithLoading isLoading={isLoading}>
        {users.length < 1 ? (
          <tr>
            <td>Users was not found</td>
          </tr>
        ) : (
          <>
            {users.map((user: IUser) => (
              <UserRow user={user} key={user.id} />
            ))}
          </>
        )}
      </WithLoading>
    </tbody>
  );
};

export default UserTableBody;
