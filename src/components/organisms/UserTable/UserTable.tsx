import UserTableBody from "../UserTableBody/UserTableBody";
import style from "./UserTable.module.scss";

const UserTable = () => {
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
      <UserTableBody/>
    </table>
  );
};

export default UserTable;
