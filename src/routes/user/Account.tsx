import React, { useReducer, Reducer } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, BorderStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";
import { TitleText, Text, Subtext, HeaderText } from "../../components/general";
import { TextInput } from "../../components/input";
import { Button } from "../../components/button";
import { useUserEmail, useUserName } from "../../store/selectors/UserSelectors";

export interface AccountProps {}

export interface AccountState {
  newEmail?: string;
  emailDisabled: boolean;
  newPassword?: string;
  passwordDisabled: boolean;
  errorMessage?: string;
  errorLocations: number[];
  isUpdatingAccount: boolean;
}

export type AccountAction =
  | {
      type: "updateState";
      payload: { newEmail: string } | { newPassword: string };
    }
  | {
      type: "toggleDisabled";
      payload:
        | { emailDisabled: boolean }
        | { passwordDisabled: boolean }
        | { emailDisabled: boolean; passwordDisabled: boolean };
    }
  | {
      type: "updateErrors";
      payload: { errorMessage: string; errorLocations: number[] };
    }
  | {
      type: "updateLoading";
      payload: { isUpdatingAccount: boolean };
    };

const signInReducer: Reducer<AccountState, AccountAction> = (state, action) => {
  switch (action.type) {
    case "updateState":
      return {
        ...state,
        ...action.payload,
        errorMessage: undefined,
        errorLocations: [],
      };
    case "toggleDisabled":
      return {
        ...state,
        ...action.payload,
      };
    case "updateErrors":
      return {
        ...state,
        ...action.payload,
        isUpdatingAccount: false,
      };
    case "updateLoading":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const initialState: AccountState = {
  emailDisabled: true,
  passwordDisabled: true,
  errorLocations: [],
  isUpdatingAccount: false,
};

const Account: React.FC<AccountProps> = ({}) => {
  const [state, dispatch] = useReducer(signInReducer, initialState);

  const storeDispatch = useDispatch();

  const email = useUserEmail();
  const { firstName, lastName } = useUserName();

  const password = "password";

  const getButtonText = (isDisabled: boolean) =>
    isDisabled ? "CHANGE" : "CANCEL";

  const handleEmailClick = () => {
    if (!state.emailDisabled) {
      dispatch({
        type: "updateState",
        payload: { newEmail: email },
      });
    }
    dispatch({
      type: "toggleDisabled",
      payload: { emailDisabled: !state.emailDisabled },
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "updateState",
      payload: { newEmail: e.target.value },
    });
  };

  const handlePasswordClick = () => {
    if (!state.passwordDisabled) {
      dispatch({
        type: "updateState",
        payload: { newPassword: password },
      });
    }
    dispatch({
      type: "toggleDisabled",
      payload: { passwordDisabled: !state.passwordDisabled },
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "updateState",
      payload: { newPassword: e.target.value },
    });
  };

  const submitAccountUpdates = () => {
    dispatch({
      type: "updateLoading",
      payload: { isUpdatingAccount: true },
    });
    dispatch({
      type: "toggleDisabled",
      payload: { emailDisabled: true, passwordDisabled: true },
    });
    setTimeout(() => {
      dispatch({
        type: "updateLoading",
        payload: { isUpdatingAccount: false },
      });
    }, 2000);
  };

  return (
    <div style={styles.account}>
      <div style={styles.info}>
        <div style={styles.infoHeader}>
          <TitleText>ACCOUNT</TitleText>
        </div>
        <div style={styles.infoBody}>
          <div style={styles.infoRowContainer}>
            <div style={styles.infoRow}>
              <div style={styles.firstName}>
                <Subtext>FIRST NAME</Subtext>
                <TextInput icon="User" disabled value={firstName} />
              </div>
              <div style={styles.lastName}>
                <Subtext>LAST NAME</Subtext>
                <TextInput icon="User" disabled value={lastName} />
              </div>
            </div>
          </div>
          <div style={styles.infoRowContainer}>
            <Subtext>PRIMARY EMAIL</Subtext>
            <div style={styles.infoRow}>
              <TextInput
                icon="Mail"
                value={state.emailDisabled ? email : state.newEmail}
                onChange={handleEmailChange}
                disabled={state.emailDisabled}
              />
              <Button
                outline={state.emailDisabled}
                onClick={handleEmailClick}
                containerStyles={styles.changeButton}
                buttonText={getButtonText(state.emailDisabled)}
              />
            </div>
          </div>
          <div style={styles.infoRowContainer}>
            <Subtext>PASSWORD</Subtext>
            <div style={styles.infoRow}>
              <TextInput
                icon="Key"
                inputType="password"
                value={state.passwordDisabled ? password : state.newPassword}
                onChange={handlePasswordChange}
                disabled={state.passwordDisabled}
              />
              <Button
                outline={state.passwordDisabled}
                onClick={handlePasswordClick}
                containerStyles={styles.changeButton}
                buttonText={getButtonText(state.passwordDisabled)}
              />
            </div>
          </div>
          <div style={styles.submitContainer}>
            <Button
              onClick={submitAccountUpdates}
              isLoading={state.isUpdatingAccount}
              buttonText="SUBMIT CHANGES"
              disabled={state.emailDisabled && state.passwordDisabled}
            />
            <div style={styles.errorContainer}>
              <Text color={colors.red}>{state.errorMessage}</Text>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.trades}></div>
    </div>
  );
};

const styles: StyleSheet = {
  account: {
    display: "flex",
    width: "85%",
    flexGrow: 1,
  },
  errorContainer: {},
  infoRowContainer: {
    marginBottom: 8,
  },
  info: {
    flex: 1,
    marginTop: "5vh",
    display: "flex",
    flexDirection: "column",
    padding: 24,
    marginRight: 8,
    ...BorderStyle.gray,
  },
  infoBody: {},
  infoHeader: {
    marginBottom: 16,
  },
  infoRow: {
    display: "flex",
    flexDirection: "row",
  },
  trades: {
    flex: 1,
    marginTop: "5vh",
    marginLeft: 8,
    padding: 24,
    ...BorderStyle.gray,
  },
  firstName: {
    flex: 1,
    marginRight: 8,
  },
  lastName: {
    flex: 1,
    marginLeft: 8,
  },
  submitContainer: {
    marginTop: 16,
  },
  changeButton: {
    width: "auto",
    minWidth: 110,
    marginLeft: 12,
  },
};

export default Account;
