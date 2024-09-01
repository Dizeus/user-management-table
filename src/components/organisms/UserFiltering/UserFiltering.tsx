import UserFilter from "../../molecules/UserFilter/UserFilter";
import style from './UserFiltering.module.scss'
const UserFiltering = () => {
  
  return (
    <div className={style.filtering}>
      <h2 className={style.title}>Filter By:</h2>
      <div className={style.filters}>
        <UserFilter filterKey="filter_name" filterName="Name" />
        <UserFilter filterKey="filter_username" filterName="Username" />
        <UserFilter filterKey="filter_email" filterName="Email" />
        <UserFilter filterKey="filter_phone" filterName="Phone" />
      </div>
    </div>
  );
}

export default UserFiltering