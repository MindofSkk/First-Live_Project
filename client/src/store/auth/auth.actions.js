// Auth Actions here

import axios from "axios";
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
} from "./auth.types";

export const loginAPI = (logincred) => async (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });
  try {
    let res = await axios.post("https://reqres.in/api/login", logincred);
    console.log(res);
    dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: AUTH_SIGN_IN_ERROR });
  }
};
export const logoutAPI = () => ({ type: AUTH_SIGN_OUT });
