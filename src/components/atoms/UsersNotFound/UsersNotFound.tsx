import { FC, ReactNode } from "react";

interface UsersNotFoundProps{
  usersLength: number;
  children: ReactNode
}

const UsersNotFound: FC<UsersNotFoundProps> = ({usersLength, children}) => {
  return (
    <>
      {usersLength ? (
        <>{ children }</>
      ) : (
        <tr>
          <td colSpan={4}>Users was not found</td>
        </tr>
      )}
    </>
  );
}

export default UsersNotFound