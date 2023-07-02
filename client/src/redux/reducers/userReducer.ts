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
  LOGOUT_USER,
  GET_CURRENT_REQUEST,
  GET_CURRENT_SUCCESS,
  GET_CURRENT_FAIL,
} from "../actionTypes/userActionTypes";
import { User } from "../types/types";

export interface UserState {
  userListe: User[];
  currentUser: User;
  isAuth: boolean;
  errors: string;
  status: string;
}
interface UserActions {
  type: string;
  payload: any; // Update the type based on your payload data type
}
const initialState: UserState = {
  userListe: [],
  currentUser: {
    username: "",
    id: null,
    email: "",
    password: "",
    phone: "",
    city: "",
    role: null,
  },
  isAuth: false,
  errors: "",
  status: "",
};
export const userReducer = (
  state = initialState,
  { type, payload }: UserActions
): UserState => {
  switch (type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        userListe: [...state.userListe, payload],
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        errors: payload,
      };
    case GET_USER_REQUEST:
      return {
        ...state,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        userListe: payload,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        errors: payload,
      };
    case GET_CURRENT_REQUEST:
      return {
        ...state,
      };
    case GET_CURRENT_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        status: "success",
        isAuth: true,
      };
    case GET_CURRENT_FAIL:
      return {
        ...state,
        errors: payload,
      };
    case LOGIN_USER_REQUEST:
      return {
        ...state,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,

        isAuth: true,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        errors: payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
export default userReducer;
