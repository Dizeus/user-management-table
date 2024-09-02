import { useTypedSelector } from "../../../utils/hooks/useTypedSelector";
import UserTableBody from "../UserTableBody/UserTableBody";
import style from "./UserTable.module.scss";

const UserTable = () => {

  const { users, isLoading } = useTypedSelector((state) => state.users);

 return (
   <div className={style.container}>
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
         <UserTableBody users={users} isLoading={isLoading}/>
       </tbody>
     </table>
   </div>
 );
};

export default UserTable;
