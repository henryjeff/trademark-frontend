import { UserStateAction } from "../actions/UserActions";
import { ActionType } from "../ActionTypes";

const initialState: UserState = {
  user: {} as UserResponseDto,
};

export default (state = initialState, action: UserStateAction): UserState => {
  switch (action.type) {
    case ActionType.LOAD_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};
