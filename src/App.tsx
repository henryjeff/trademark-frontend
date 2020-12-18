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

//@ts-ignore
import { AnimatedSwitch } from "react-router-transition";
// Navigation
import TopNavigation from "./components/view/navigation/TopNavigation";

// Routes
import SignUp from "./routes/auth/SignUp";
import SignIn from "./routes/auth/SignIn";
import Welcome from "./routes/home/Welcome";
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
      <div className="app">
        <TopNavigation />
        <div style={styles.body}>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/" component={Welcome} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/account" component={UserAccount} />
            <PrivateRoute exact path="/search" component={Search} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

//https://medium.com/@khwsc1/step-by-step-guide-of-simple-routing-transition-effect-for-react-with-react-router-v4-and-9152db1566a0

const styles: StyleSheet = {
  body: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginTop: 48,
  },
};

export default App;
