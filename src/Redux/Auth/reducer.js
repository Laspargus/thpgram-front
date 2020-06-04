import Cookies from "js-cookie";

const initialState = {
  loading: false,
  token: null,
  user_id: null,
  username: null,
  errorMessage: null,
  isAuthenticated: Cookies.get("user_token") ? true : false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REGISTRATION_REQUEST":
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };

    case "FETCH_REGISTRATION_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        //token: action.user.jwt,
        user_id: action.user.id,
        errorMessage: "",
        username: action.user.username,
      };

    case "LOAD_USER":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user_id: action.user.id,
        errorMessage: "",
        username: action.user.username,
        token: action.token.jwt,
      };

    case "FETCH_REGISTRATION_FAILURE":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        errorMessage: action.error,
      };

    case "LOGOUT_USER":
      Cookies.remove("user_token");
      Cookies.remove("user_id");
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: null,
        user_id: null,
        errorMessage: "",
      };

    case "FETCH_LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };

    case "FETCH_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: action.token,
        user_id: action.user.id,
        errorMessage: "",
        username: action.user.username,
      };

    case "FETCH_LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        errorMessage: action.error,
      };

    default:
      return state;
  }
};

export default authReducer;
