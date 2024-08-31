import { useEffect } from "react";
import { useTypedDispatch } from "./utils/hooks/useTypedDispatch";
import { getUsersThunk } from "./store/features/users/users-thunks";
import { useTypedSelector } from "./utils/hooks/useTypedSelector";
import { useSearchParams } from "react-router-dom";

function App() {
  const dispatch = useTypedDispatch();
  const users = useTypedSelector((state) => state.users.users);
  let [searchParams, setSearchParams] = useSearchParams();
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
    <div className="App">
      <h1>User Managment Table</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.username}</p>
          <p>{user.name}</p>
          <p>{user.phone}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
