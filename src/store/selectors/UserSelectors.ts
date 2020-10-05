import { useSelector } from "react-redux";
import _ from "lodash";

export const useUser = () => {
  return useSelector((s: RootState) => s.User.user, _.isEqual);
};

export const useUserEmail = () => {
  return useSelector((s: RootState) => s.User.user.email, _.isEqual);
};

export const useUserName = () => {
  return useSelector((s: RootState) => {
    return {
      firstName: s.User.user.first_name,
      lastName: s.User.user.last_name,
    };
  }, _.isEqual);
};
