import {
  GET_ROOM_ERROR,
  GET_ROOM_LOADING,
  GET_ROOM_SUCCESS,
} from "./product.types";
const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (
  state = productInitalState,
  { type, payload }
) => {
  switch (type) {
    case GET_ROOM_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_ROOM_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case GET_ROOM_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
