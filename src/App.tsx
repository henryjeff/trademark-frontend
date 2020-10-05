import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useTokenData } from "./store/selectors/AuthSelectors";
import { StyleSheet } from "./constants/Styles";

// Navigation
import TopNavigation from "./components/view/navigation/TopNavigation";

// Routes
import SignUp from "./routes/auth/SignUp";
import SignIn from "./routes/auth/SignIn";
import Dashboard from "./routes/home/Dashboard";
import UserAccount from "./routes/user/Account";
import Search from "./routes/search/Search";

function PrivateRoute({ ...rest }: any) {
  const tokenData = useTokenData();

  if (!tokenData?.accessToken) {
    return <Redirect to="/signin" />;
  }
  return <Route {...rest} />;
}

function App() {
  return (
    <Router>
      <body className="app">
        <TopNavigation />
        <div style={styles.body}>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/account" component={UserAccount} />
            <PrivateRoute exact path="/search" component={Search} />
          </Switch>
        </div>
      </body>
    </Router>
  );
}

const styles: StyleSheet = {
  body: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
};

export default App;
