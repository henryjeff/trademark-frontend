import { AuthStateAction } from "../actions/AuthActions";
import { ActionType } from "../ActionTypes";
const initialState: AuthState = {
  tokenData: undefined,
};

export default (state = initialState, action: AuthStateAction): AuthState => {
  switch (action.type) {
    case ActionType.LOG_IN:
      return {
        ...state,
        tokenData: {
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        },
      };
    case ActionType.LOG_OUT:
      return {
        ...state,
        tokenData: undefined,
      };
    default:
      return state;
  }
};
