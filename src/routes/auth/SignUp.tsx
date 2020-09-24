import React, { useReducer, Reducer } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { StyleSheet } from "../../constants/Styles";
import colors from "../../constants/Colors";
import {
  TitleText,
  HeaderText,
  Text,
  LinkText,
} from "../../components/general";
import { TextInput } from "../../components/input";
import { Button } from "../../components/button";
import { authCreateUser } from "../../store/actions/AuthActions";
import { validateSignUp, validateSignUpResponse } from "../../util/AuthChecks";

export interface SignUpProps {}

export interface SignUpState {
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
  password?: string;
  rePassword?: string;
  isLoading: boolean;
  errorMessage?: string;
  errorLocations: number[];
}

export type SignUpAction =
  | {
      type: "updateInformation";
      payload:
        | { email: string }
        | { username: string }
        | { password: string }
        | { rePassword: string }
        | { firstName: string }
        | { lastName: string };
    }
  | {
      type: "updateLoading";
      payload: { isLoading: boolean };
    }
  | {
      type: "updateErrors";
      payload: { errorMessage: string; errorLocations: number[] };
    };

const signUpReducer: Reducer<SignUpState, SignUpAction> = (state, action) => {
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

const initialState: SignUpState = {
  isLoading: false,
  errorLocations: [],
};

const SignUp: React.FC<SignUpProps> = ({}) => {
  const [state, dispatch] = useReducer(signUpReducer, initialState);
  const storeDispatch = useDispatch();
  const history = useHistory();

  const submit = () => {
    dispatch({ type: "updateLoading", payload: { isLoading: true } });
    const validationRes = validateSignUp(state);

    if (validationRes === "valid") {
      storeDispatch(
        authCreateUser({
          first_name: state.firstName!,
          last_name: state.lastName!,
          email: state.email!,
          username: state.username!,
          password: state.password!,
          alpaca_key_id: "a",
          alpaca_secret_key: "a",
        })
      )
        //@ts-ignore
        .then((res) => {
          const serverValidationRes = validateSignUpResponse(res);
          if (serverValidationRes === "valid") {
            console.log("succeffuly created acct");
            history.push("/signin");
          } else {
            dispatch(serverValidationRes);
          }
        })
        .catch(() => {
          dispatch({
            type: "updateErrors",
            payload: {
              errorMessage: "An unknown error has occurred, try again later.",
              errorLocations: [],
            },
          });
        });
    } else {
      dispatch(validationRes);
    }
    dispatch({ type: "updateLoading", payload: { isLoading: false } });
  };

  return (
    <div style={styles.form}>
      <TitleText>SIGN UP</TitleText>
      <HeaderText small style={{ marginBottom: 20 }} color={colors.gray1}>
        Welcome to the club
      </HeaderText>
      <div style={styles.nameContainer}>
        <TextInput
          icon="User"
          containerStyles={{ marginLeft: 0 }}
          placeholderText="First Name"
          inputStyle={
            state.errorLocations.includes(0) ? { borderColor: colors.red } : {}
          }
          onChange={(e) => {
            dispatch({
              type: "updateInformation",
              payload: { firstName: e.target.value },
            });
          }}
        />
        <TextInput
          icon="User"
          placeholderText="Last Name"
          containerStyles={{ marginRight: 0 }}
          inputStyle={
            state.errorLocations.includes(1) ? { borderColor: colors.red } : {}
          }
          onChange={(e) => {
            dispatch({
              type: "updateInformation",
              payload: { lastName: e.target.value },
            });
          }}
        />
      </div>
      <TextInput
        icon="User"
        placeholderText="Username"
        inputStyle={
          state.errorLocations.includes(2) ? { borderColor: colors.red } : {}
        }
        onChange={(e) => {
          dispatch({
            type: "updateInformation",
            payload: { username: e.target.value },
          });
        }}
      />
      <TextInput
        icon="Mail"
        placeholderText="Email"
        inputStyle={
          state.errorLocations.includes(3) ? { borderColor: colors.red } : {}
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
          state.errorLocations.includes(4) ? { borderColor: colors.red } : {}
        }
        onChange={(e) => {
          dispatch({
            type: "updateInformation",
            payload: { password: e.target.value },
          });
        }}
      />
      <TextInput
        icon="Key"
        inputType="password"
        placeholderText="Re-type Password"
        inputStyle={
          state.errorLocations.includes(5) ? { borderColor: colors.red } : {}
        }
        onChange={(e) => {
          dispatch({
            type: "updateInformation",
            payload: { rePassword: e.target.value },
          });
        }}
      />
      <Button
        isLoading={state.isLoading}
        onClick={submit}
        buttonText="SIGN UP"
      />
      <div style={styles.error}>
        <Text color={colors.red}>{state.errorMessage}</Text>
      </div>

      <LinkText redirectTo="/signin">
        Have an account? Click here to Sign In
      </LinkText>
    </div>
  );
};

const styles: StyleSheet = {
  nameContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
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
  link: {
    textDecoration: "none",
  },
  error: {
    padding: 4,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
};

export default SignUp;
