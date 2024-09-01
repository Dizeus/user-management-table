import { FC, ReactNode } from "react";
import Spinner from "../../atoms/Spinner/Spinner";

interface LoadingProps {
  children: ReactNode;
  isLoading: boolean;
}

const WithLoading: FC<LoadingProps> = ({children, isLoading}) => {
  return isLoading ? <Spinner /> : <>{children}</>;
};

export default WithLoading;
