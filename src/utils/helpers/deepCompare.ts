import { IUser } from "../types/IUser";

export const deepCompare = (arr1: IUser[], arr2: IUser[]): boolean => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])) return false;
  }
  return true;
};
