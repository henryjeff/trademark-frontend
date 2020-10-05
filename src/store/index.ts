import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import * as History from "history";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ActionType } from "./ActionTypes";

export const history = History.createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

// storage.removeItem("persist:root");

if (process.env.NODE_ENV === "development") {
  //@ts-ignore
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const persistConfig = {
  key: "root",
  storage,
};

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const reducers = (state: any, action: any) => {
  if (action.type === ActionType.LOG_OUT) {
    // for all keys defined in your persistConfig(s)
    // console.log("logout");
    storage.removeItem("persist:root");
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return rootReducer(history)(state, action);
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  initialState as any,
  composedEnhancers
);

export const persistor = persistStore(store);

/**
--------------------------------------------------------------------------------
                  A High level view of how the data flows
--------------------------------------------------------------------------------                  

                              +-------------+
                              |  On State   |
                              |   Change    |
                              +-------------+
                                      |0/8
                                      v
                              +------+------+
                              | Components  |
                              +-------------+
                                      |1
                                      v
              +------------+ 6 +------+------+
              |  Reducers  +<--+   Actions   |
              +------------+   +--+----------+
                    |7            ^       |2
                    v            5|       v
              +-----+------+   +----------+---+ 3 +-----------+
              |Update State|   |     API      +-->+  Backend  |
              +------------+   +--+-----------+   +-----+-----+
                                  ^          4          |
                                  +---------------------+

0: If a component depends on data from state, on state change the component will
re-render.

1: Components make calls to Actions. These actions are pretty high level, such
as LoadFeed or CreatePost.

2: Actions can be thought of as a 3 way middleman between the Components, the 
API and Reducers (More on this later). Given that a component has called an 
action, the action will now handle any business logic, then make a call to 
the API. The API layer is strictly responsible for making API calls to our 
backend. 

3: Now that we are at the API layer, we make a request to the backend

4: Assuming all goes well we have a response from the backend and can now proceed

5: Our response from the API is fed back into the action, which will now direct
that response towards a reducer

6: The reducers serve an important part in react. They are what update the 
actual state of our app given our response from the server.

7: We now update the state. As a quick side note, the redux state is actually 
immutable and so a new state created in this step, but we don't have to worry 
about it.

8: If our components depend on any data from state, and our state has changed
we will re-render.

--------------------------------------------------------------------------------
 */
