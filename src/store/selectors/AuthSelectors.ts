import { useSelector } from "react-redux";
import _ from "lodash";

export const useTokenData = () => {
  return useSelector((s: RootState) => s.Auth.tokenData, _.isEqual);
};
