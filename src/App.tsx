import { lazy, Suspense, useEffect } from "react";
import { useTypedDispatch } from "./utils/hooks/useTypedDispatch";
import { getUsersThunk } from "./store/features/users/users-thunks";
import { useSearchParams } from "react-router-dom";
import style from "./App.module.scss";
import UserTable from "./components/organisms/UserTable/UserTable";
import Spinner from "./components/atoms/Spinner/Spinner";
const UserFiltering = lazy(
  () => import("./components/organisms/UserFiltering/UserFiltering")
);
function App() {
  const dispatch = useTypedDispatch();
  const [searchParams] = useSearchParams();
  const filterName = searchParams.get("filter_name") || "";
  const filterUsername = searchParams.get("filter_username") || "";
  const filterEmail = searchParams.get("filter_email") || "";
  const filterPhone = searchParams.get("filter_phone") || "";

  useEffect(() => {
    dispatch(
      getUsersThunk(filterName, filterUsername, filterEmail, filterPhone)
    );
  }, [filterName, filterUsername, filterEmail, filterPhone]);

  return (
    <div className={style.app}>
      <h1 className={style.app__title}>User Managment Table</h1>
      <Suspense fallback={<Spinner />}>
        <UserFiltering />
      </Suspense>
      <UserTable />
    </div>
  );
}

export default App;
