import { useEffect } from "react";
import { useTypedDispatch } from "./utils/hooks/useTypedDispatch";
import { getUsersThunk } from "./store/features/users/users-thunks";
import { useTypedSelector } from "./utils/hooks/useTypedSelector";
import { useSearchParams } from "react-router-dom";
import UserTable from "./components/organisms/UserTable/UserTable";
import style from "./App.module.scss"
import UserFiltering from "./components/organisms/UserFiltering/UserFiltering";
function App() {
  const dispatch = useTypedDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterName = searchParams.get("filter_name") || "";
  const filterUsername = searchParams.get("filter_username") || "";
  const filterEmail = searchParams.get("filter_email") || "";
  const filterPhone = searchParams.get("filter_phone") || "";

  useEffect(() => {
    dispatch(
      getUsersThunk(filterName, filterUsername, filterEmail, filterPhone)
    );
  }, [searchParams]);

  return (
    <div className={style.app}>
      <h1 className={style.app__title}>User Managment Table</h1>
      <UserFiltering/>
      <UserTable />
    </div>
  );
}

export default App;
