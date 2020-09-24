import AuthReducer from "./AuthReducer";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { BrowserHistory } from "history";

const createRootReducer = (history: BrowserHistory) =>
  combineReducers<RootState, any>({
    //@ts-ignore
    router: connectRouter(history),
    Auth: AuthReducer,
  });

export default createRootReducer;
