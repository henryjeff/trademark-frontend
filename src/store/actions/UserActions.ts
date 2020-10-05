// import { AuthController } from "../../api/AuthController";
import { UserController } from "../../api/UserController";
import { ActionType } from "../ActionTypes";
export type UserStateAction = UserLoadAction | UserLoadAction;

export interface UserLoadAction {
  type: typeof ActionType.LOAD_USER;
  payload: { user: UserResponseDto };
}

export const loadUser = () => (
  dispatch: (a: UserLoadAction) => any,
  getState: () => RootState
) => {
  return UserController.get().then((user) => {
    dispatch({
      type: ActionType.LOAD_USER,
      payload: { user },
    });
  });
};
