// import { AxiosResponse, AxiosError } from "axios";
import { SignUpState, SignUpAction } from "../routes/auth/SignUp";
import { SignInState, SignInAction } from "../routes/auth/SignIn";

export const validateEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validateSignUp = (state: SignUpState): SignUpAction | "valid" => {
  if (!state.firstName) {
    return {
      type: "updateErrors",
      payload: {
        errorMessage: "Please enter a first name.",
        errorLocations: [0],
      },
    };
  }
  if (!state.lastName) {
    return {
      type: "updateErrors",
      payload: {
        errorMessage: "Please enter a last name.",
        errorLocations: [1],
      },
    };
  }
  if (!state.email) {
    return {
      type: "updateErrors",
      payload: {
        errorMessage: "Please enter an email.",
        errorLocations: [3],
      },
    };
  }
  if (!state.password) {
    return {
      type: "updateErrors",
      payload: {
        errorMessage: "Please enter a password.",
        errorLocations: [4],
      },
    };
  }
  if (!state.rePassword) {
    return {
      type: "updateErrors",
      payload: {
        errorMessage: "Please retype your password.",
        errorLocations: [5],
      },
    };
  }
  if (!validateEmail(state.email)) {
    return {
      type: "updateErrors",
      payload: {
        errorMessage: "Please enter a valid email address.",
        errorLocations: [3],
      },
    };
  }
  if (state.password !== state.rePassword) {
    return {
      type: "updateErrors",
      payload: {
        errorMessage: "Your passwords do not match.",
        errorLocations: [4, 5],
      },
    };
  }
  return "valid";
};

type SignUpResponseError = {
  username?: string[];
  email?: string[];
  password?: string[];
  alpaca_key_id?: string[];
  alpaca_secret_key?: string[];
};

export const validateSignUpResponse = (res: any): SignUpAction | "valid" => {
  if (!res) return "valid";
  if (res.response) {
    if (res.response.status === 201) {
      return "valid";
    }
    if (res.response.data) {
      const data = res.response.data as SignUpResponseError;
      if (data.username) {
        return {
          type: "updateErrors",
          payload: {
            errorMessage: data.username[0],
            errorLocations: [2],
          },
        };
      }
      if (data.email) {
        return {
          type: "updateErrors",
          payload: {
            errorMessage: data.email[0],
            errorLocations: [3],
          },
        };
      }
      if (data.password) {
        return {
          type: "updateErrors",
          payload: {
            errorMessage: data.password[0],
            errorLocations: [4, 5],
          },
        };
      }
    }
  }
  return {
    type: "updateErrors",
    payload: {
      errorMessage: `${res.response.status} error, could not create an account.`,
      errorLocations: [],
    },
  };
};

export const validateSignIn = (state: SignInState): SignInAction | "valid" => {
  if (!state.email) {
    return {
      type: "updateErrors",
      payload: {
        errorMessage: "Please enter an email.",
        errorLocations: [0],
      },
    };
  }
  if (!state.password) {
    return {
      type: "updateErrors",
      payload: {
        errorMessage: "Please enter a password.",
        errorLocations: [1],
      },
    };
  }
  if (!validateEmail(state.email)) {
    return {
      type: "updateErrors",
      payload: {
        errorMessage: "Please enter a valid email address.",
        errorLocations: [0],
      },
    };
  }
  return "valid";
};

type SignInResponseError = {
  detail?: string;
};

export const validateSignInResponse = (res: any): SignInAction | "valid" => {
  if (!res) return "valid";
  if (res.response) {
    if (res.response.status === 200) {
      return "valid";
    }
    if (res.response.data) {
      const data = res.response.data as SignInResponseError;
      if (data.detail) {
        return {
          type: "updateErrors",
          payload: {
            errorMessage: data.detail,
            errorLocations: [0, 1],
          },
        };
      }
    }
  }
  return {
    type: "updateErrors",
    payload: {
      errorMessage: `${res.response.status} error, could not login.`,
      errorLocations: [],
    },
  };
};
