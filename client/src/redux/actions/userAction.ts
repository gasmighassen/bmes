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
} from "../actionTypes/userActionTypes";
import { User } from "../types/types";
import jwt_decode from "jwt-decode";

export const loginUser = (login) => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: LOGIN_USER_REQUEST, payload: "sent" });
  console.log(login);
  try {
    let result = await axios.post("/users/login", login);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: result.data.payload });
    console.log(result.data);
    localStorage.setItem("token", result.data.access_token);

    /*    // Decode the access token
    const decoded: { role: string } = jwt_decode(result.data.access_token);

    // Check the user's role before redirecting
    if (decoded.role === "admin") {
      window.location.href = "/admin/dashboard";
    } else if (decoded.role === "user") {
      window.location.href = "/";
    } else {
      // Handle other roles or redirect to a default page
      window.location.href = "/";
    } */
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAIL, payload: error });
    console.log(error);
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
    dispatch({ type: "LOGOUT" });
  };
};
