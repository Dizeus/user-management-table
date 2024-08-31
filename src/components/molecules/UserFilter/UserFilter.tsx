import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./UserFilter.module.scss"
interface UserFilterProps {
  filterKey: string;
  filterName: string;
}
const UserFilter: FC<UserFilterProps> = ({ filterKey, filterName }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterValue, setFilterValue] = useState<string>(searchParams.get(filterKey) || "");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set(filterKey, e.target.value);
    setSearchParams(currentParams);
  };

  return (
    <div className={style.filter}>
      <input
        type="text"
        className={style.filter__input}
        value={filterValue}
        onChange={handleInputChange}
        placeholder={filterName}
        name={filterName}
        id={filterName}
      />
      <label htmlFor={filterName} className={style.filter__label}>
        {filterName}
      </label>
    </div>
  );
};

export default UserFilter;
