import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { BrowserHistory } from "history";
import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer";

const createRootReducer = (history: BrowserHistory) =>
  combineReducers<RootState, any>({
    //@ts-ignore
    router: connectRouter(history),
    Auth: AuthReducer,
    User: UserReducer,
  });

export default createRootReducer;
