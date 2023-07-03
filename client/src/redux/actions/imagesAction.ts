import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";

import {
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAIL,
} from "../actionTypes/imageActionTypes";
export const getImages = () => async (dispatch: Dispatch<any>) => {
  dispatch({ type: GET_IMAGES_REQUEST });
  try {
    const response = await axios.get("/cloud");
    dispatch({
      type: GET_IMAGES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatch({
        type: GET_IMAGES_FAIL,
        payload: error.response?.data.message || error.message,
      });
    }
  }
};
