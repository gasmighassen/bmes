import { User } from "../types/types";

export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAIL = "ADD_USER_FAIL";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

export const GET_CURRENT_REQUEST = "GET_CURRENT_REQUEST";
export const GET_CURRENT_SUCCESS = "GET_CURRENT_SUCCESS";
export const GET_CURRENT_FAIL = "GET_CURRENT_FAIL";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";
export const LOGOUT_USER = "LOGOUT_USER";

interface AddUserRequestAction {
  type: typeof ADD_USER_REQUEST;
}
interface LoginUser {
  type: typeof LOGIN_USER_REQUEST;
  payload: string;
}
interface LoginUserSuccess {
  type: typeof LOGIN_USER_SUCCESS;
  payload: User;
}
interface LoginUserFail {
  type: typeof LOGIN_USER_FAIL;
  payload: string;
}
interface AddUserSuccessAction {
  type: typeof ADD_USER_SUCCESS;
  payload: User;
}

interface AddUserFailAction {
  type: typeof ADD_USER_FAIL;
  payload: string;
}

interface GetUserRequestAction {
  type: typeof GET_USER_REQUEST;
}

interface GetUserSuccessAction {
  type: typeof GET_USER_SUCCESS;
  payload: User[];
}

interface GetUserFailAction {
  type: typeof GET_USER_FAIL;
  payload: string;
}
interface GetCurrentUserRequestAction {
  type: typeof GET_CURRENT_REQUEST;
}

interface GetCurrentUserSuccessAction {
  type: typeof GET_CURRENT_SUCCESS;
  payload: User[];
}

interface GetCurrentUserFailAction {
  type: typeof GET_CURRENT_FAIL;
  payload: string;
}

interface UpdateUserRequestAction {
  type: typeof UPDATE_USER_REQUEST;
}

interface UpdateUserSuccessAction {
  type: typeof UPDATE_USER_SUCCESS;
  payload: User;
}

interface UpdateUserFailAction {
  type: typeof UPDATE_USER_FAIL;
  payload: string;
}

interface DeleteUserRequestAction {
  type: typeof DELETE_USER_REQUEST;
}

interface DeleteUserSuccessAction {
  type: typeof DELETE_USER_SUCCESS;
  payload: string;
}

interface DeleteUserFailAction {
  type: typeof DELETE_USER_FAIL;
  payload: string;
}
interface UserLogout {
  type: typeof LOGOUT_USER;
}
export type UserAction =
  | AddUserRequestAction
  | AddUserSuccessAction
  | AddUserFailAction
  | GetUserRequestAction
  | GetUserSuccessAction
  | GetUserFailAction
  | UpdateUserRequestAction
  | UpdateUserSuccessAction
  | UpdateUserFailAction
  | DeleteUserRequestAction
  | DeleteUserSuccessAction
  | DeleteUserFailAction
  | LoginUser
  | LoginUserSuccess
  | LoginUserFail
  | UserLogout
  | GetCurrentUserRequestAction
  | GetCurrentUserSuccessAction
  | GetCurrentUserFailAction
  | UserLogout;
