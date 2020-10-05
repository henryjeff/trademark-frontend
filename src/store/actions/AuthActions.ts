import { AuthController } from "../../api/AuthController";
import { ActionType } from "../ActionTypes";

export type AuthStateAction =
  | AuthLoginAction
  | AuthCreateUserAction
  | AuthLogoutAction;

interface AuthLoginAction {
  type: typeof ActionType.LOG_IN;
  payload: { accessToken: string; refreshToken: string };
}

export const authLogin = (email: string, password: string) => (
  dispatch: (a: AuthLoginAction) => any,
  getState: () => RootState
) => {
  return AuthController.login({ email, password }).then((tokenRes) => {
    dispatch({
      type: ActionType.LOG_IN,
      payload: { accessToken: tokenRes.access, refreshToken: tokenRes.refresh },
    });
  });
};

interface AuthCreateUserAction {
  type: typeof ActionType.CREATE_USER;
  payload: {};
}

export const authCreateUser = (user: UserCreateRequestDto) => (
  dispatch: (a: AuthCreateUserAction) => any,
  getState: () => RootState
) => {
  return AuthController.create({ resource: user })
    .then((userRes) => {
      console.log("User created successfully");
    })
    .catch((err) => {
      return err;
    });
};

interface AuthLogoutAction {
  type: typeof ActionType.LOG_OUT;
  payload: {};
}

export const authLogout = () => (
  dispatch: (a: AuthLogoutAction) => any,
  getState: () => RootState
) => {
  return dispatch({ type: ActionType.LOG_OUT, payload: {} });
};

interface AuthRefreshAccessToken {
  type: typeof ActionType.REFRESH_TOKEN;
  payload: {};
}

export const authRefreshAccessToken = (refreshToken: string) => (
  dispatch: (a: AuthRefreshAccessToken) => any,
  getState: () => RootState
) => {
  return;
  // return dispatch({ type: ActionType.LOG_OUT, payload: {} });
};
