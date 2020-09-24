import React, { useReducer, Reducer } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { StyleSheet, FontStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";
import {
  TitleText,
  HeaderText,
  LinkText,
  Text,
} from "../../components/general";
import { TextInput } from "../../components/input";
import { Button } from "../../components/button";
import { validateSignIn, validateSignInResponse } from "../../util/AuthChecks";
import { authLogin } from "../../store/actions/AuthActions";

export interface SignInProps {}

export interface SignInState {
  email?: string;
  password?: string;
  isLoading: boolean;
  errorMessage?: string;
  errorLocations: number[];
}

export type SignInAction =
  | {
      type: "updateInformation";
      payload: { email: string } | { password: string };
    }
  | {
      type: "updateLoading";
      payload: { isLoading: boolean };
    }
  | {
      type: "updateErrors";
      payload: { errorMessage: string; errorLocations: number[] };
    };

const signInReducer: Reducer<SignInState, SignInAction> = (state, action) => {
  switch (action.type) {
    case "updateInformation":
      return {
        ...state,
        errorMessage: undefined,
        errorLocations: [],
        ...action.payload,
      };
    case "updateLoading":
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case "updateErrors":
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        errorLocations: action.payload.errorLocations,
      };
    default:
      return state;
  }
};

const initialState: SignInState = {
  isLoading: false,
  errorLocations: [],
};

const SignIn: React.FC<SignInProps> = ({}) => {
  const [state, dispatch] = useReducer(signInReducer, initialState);
  const storeDispatch = useDispatch();
  const history = useHistory();

  const submit = () => {
    dispatch({ type: "updateLoading", payload: { isLoading: true } });
    const validationRes = validateSignIn(state);
    if (validationRes === "valid") {
      storeDispatch(authLogin(state.email!, state.password!))
        //@ts-ignore
        .then((res) => {
          const serverValidationRes = validateSignInResponse(res);
          if (serverValidationRes === "valid") {
            console.log("successfully logged in");
            history.push("/dashboard");
          } else {
            dispatch(serverValidationRes);
          }
        })
        .catch((res: any) => {
          if (res.response.data.detail) {
            dispatch({
              type: "updateErrors",
              payload: {
                errorMessage: res.response.data.detail,
                errorLocations: [0, 1],
              },
            });
          } else {
            dispatch({
              type: "updateErrors",
              payload: {
                errorMessage: "An unknown error has occurred, try again later.",
                errorLocations: [],
              },
            });
          }
        });
    } else {
      dispatch(validationRes);
    }
    dispatch({ type: "updateLoading", payload: { isLoading: false } });
  };

  return (
    <div style={styles.form}>
      <TitleText>SIGN IN</TitleText>
      <HeaderText small style={{ marginBottom: 20 }} color={colors.gray1}>
        Welcome back!
      </HeaderText>
      <TextInput
        icon="Mail"
        placeholderText="Email"
        inputStyle={
          state.errorLocations.includes(0) ? { borderColor: colors.red } : {}
        }
        onChange={(e) => {
          dispatch({
            type: "updateInformation",
            payload: { email: e.target.value },
          });
        }}
      />
      <TextInput
        icon="Key"
        inputType="password"
        placeholderText="Password"
        inputStyle={
          state.errorLocations.includes(1) ? { borderColor: colors.red } : {}
        }
        onChange={(e) => {
          dispatch({
            type: "updateInformation",
            payload: { password: e.target.value },
          });
        }}
      />
      <Button
        isLoading={state.isLoading}
        onClick={submit}
        buttonText="SIGN IN"
      />
      <div style={styles.error}>
        <Text color={colors.red}>{state.errorMessage}</Text>
      </div>

      <LinkText redirectTo="/signup">
        Need an account? Click here to Sign Up
      </LinkText>
    </div>
  );
};

const styles: StyleSheet = {
  form: {
    marginTop: "15vh",
    width: "25%",
    minWidth: 300,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  error: {
    padding: 4,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
};

export default SignIn;
