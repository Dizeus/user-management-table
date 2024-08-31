import { Action } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "./features/users/users-slice";

export const rootReducer = combineReducers({
  users: usersSlice
});

export const setupStore = (initialState = {}) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

  return store;
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;