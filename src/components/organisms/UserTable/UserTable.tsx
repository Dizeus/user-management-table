import UserTableBody from "../UserTableBody/UserTableBody";
import style from "./UserTable.module.scss";

const UserTable = () => {
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
       <UserTableBody />
     </table>
   </div>
 );
};

export default UserTable;
