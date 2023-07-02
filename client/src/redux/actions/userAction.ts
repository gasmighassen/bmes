import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UserAction,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  GET_CURRENT_REQUEST,
  GET_CURRENT_SUCCESS,
  GET_CURRENT_FAIL,
} from "../actionTypes/userActionTypes";
import { User } from "../types/types";
import jwt_decode from "jwt-decode";

export const loginUser = (login) => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: LOGIN_USER_REQUEST, payload: "sent" });

  try {
    let result = await axios.post("/users/login", login);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: result.data.payload });

    localStorage.setItem("token", result.data.access_token);
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAIL, payload: error });

  }
};

export const getUsers = () => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const response = await axios.get("/users");

    dispatch({
      type: GET_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatch({
        type: GET_USER_FAIL,
        payload: error.response?.data.message || error.message,
      });
    }
  }
};
export const userCurrent = () => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: GET_CURRENT_REQUEST });
  const accessToken = localStorage.getItem("token");
  try {
    let result = await axios.get("/users/current", {
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    });

    dispatch({ type: GET_CURRENT_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_CURRENT_FAIL, payload: error });
  }
};

export const register =
  (User: User) => async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: ADD_USER_REQUEST });
    try {
      const response = await axios.post("/users/register", User);
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: response.data.Users,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({ type: ADD_USER_FAIL, payload: error.message });
      }
    }
  };

export const updateUser =
  (User: User) => async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UPDATE_USER_REQUEST });
      const { data } = await axios.put(`/users/${User.id}`, User);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({
          type: UPDATE_USER_FAIL,
          payload: error.response?.data.message || error.message,
        });
      }
    }
  };

export const deleteUser =
  (id: string) => async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });
      const response = await axios.delete(`/users/${id}`);
      dispatch({ type: DELETE_USER_SUCCESS, payload: id });
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({
          type: DELETE_USER_FAIL,
          payload: error.response?.data.message || error.message,
        });
      }
    }
  };
export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT_USER" });
  };
};
