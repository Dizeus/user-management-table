import { FC, ReactNode } from "react";
import Spinner from "../../atoms/Spinner/Spinner";

interface LoadingProps {
  children: ReactNode;
  isLoading: boolean;
}

const WithLoading: FC<LoadingProps> = ({children, isLoading}) => {
  return isLoading ? (
    <tr>
      <td colSpan={4}>
        <Spinner />
      </td>
    </tr>
  ) : (
    <>{children}</>
  );
};

export default WithLoading;
