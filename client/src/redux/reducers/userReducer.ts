import {
  UserAction,
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
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from "../actionTypes/userActionTypes";
import { User } from "../types/types";

export interface UserState {
  userListe: User[];
  currentUser: User[];
  errors: string;
  status: string;
}
const initialState: UserState = {
  userListe: [],
  currentUser: [],
  errors: "",
  status: "",
};
export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        userListe: [...state.userListe, action.payload],
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    case GET_USER_REQUEST:
      return {
        ...state,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        userListe: action.payload,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    case LOGIN_USER_REQUEST:
      return {
        ...state,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        currentUser: [...state.currentUser, { ...action.payload }],
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
