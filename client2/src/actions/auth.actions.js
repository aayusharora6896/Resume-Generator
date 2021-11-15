import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../helpers/auth.helper";
import jwt_decode from "jwt-decode";
// import store from "../store";

//Register User
// export const REGISTER_USER = 'REGISTER_USER';
export const registerUser = userData => dispatch => {
  axios
    .post("/api/user/register", userData)
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Login- get User token
// export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      //Save to localStorage
      const { token } = res.data;

      //Set token to ls
      localStorage.setItem("jwtToken", token);

      //Set token to Auth Header
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwt_decode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  //Remove token from the local storage
  localStorage.removeItem("jwtToken");
  //Remove auth header for fututre requests
  setAuthToken(false);
  //set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};