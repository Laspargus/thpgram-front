import Cookies from "js-cookie";

export const registerRequest = () => {
  return {
    type: "FETCH_REGISTRATION_REQUEST",
  };
};

export const registerSuccess = (user) => {
  return {
    type: "FETCH_REGISTRATION_SUCCESS",
    user,
  };
};

export const registerFail = (error) => {
  return {
    type: "FETCH_REGISTRATION_FAILURE",
    error,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};

export const loginRequest = () => {
  return {
    type: "FETCH_LOGIN_REQUEST",
  };
};

export const loginSuccess = (user, token) => {
  return {
    type: "FETCH_LOGIN_SUCCESS",
    user,
    token,
  };
};

export const loadUser = (response) => {
  return {
    type: "LOAD_USER",
    user: response,
    token: Cookies.get("user_token"),
  };
};

export const loginFail = (error) => {
  return {
    type: "FETCH_LOGIN_FAILURE",
    error,
  };
};
