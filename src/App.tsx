import { lazy, Suspense, useEffect } from "react";
import { useTypedDispatch } from "./utils/hooks/useTypedDispatch";
import { getUsersThunk } from "./store/features/users/users-thunks";
import { useSearchParams } from "react-router-dom";
import style from "./App.module.scss";
import UserFiltering from "./components/organisms/UserFiltering/UserFiltering";
import Spinner from "./components/atoms/Spinner/Spinner";
const UserTable = lazy(
  () => import("./components/organisms/UserTable/UserTable")
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
  }, [searchParams]);

  return (
    <div className={style.app}>
      <h1 className={style.app__title}>User Managment Table</h1>
      <UserFiltering />
      <Suspense fallback={<Spinner />}>
        <UserTable />
      </Suspense>
    </div>
  );
}

export default App;
