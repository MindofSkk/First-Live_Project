import axios from "axios";
import {
  GET_ROOM_ERROR,
  GET_ROOM_LOADING,
  GET_ROOM_SUCCESS,
} from "./product.types";

// get data
export const getdataAPI = (state) => (dispatch) => {
  //console.log("state",state)
  dispatch({ type: GET_ROOM_LOADING });
  return axios
    .get(`https://json-masai-ser-production.up.railway.app/posts?q=${state}`)
    .then((res) => {
      //console.log(res);
      return dispatch({ type: GET_ROOM_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      dispatch({ type: GET_ROOM_ERROR });
    });
};

// post data
export const addDataAPI = (adddata) => (dispatch) => {
  return axios
    .post("https://json-masai-ser-production.up.railway.app/posts", adddata)
    .then((res) => {
    })
    .catch((err) => {
      console.log(err);
    });
};
