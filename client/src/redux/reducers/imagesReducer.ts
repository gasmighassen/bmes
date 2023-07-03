import {
  ImagesAction,
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAIL,
} from "../actionTypes/imageActionTypes";
import { Image } from "../types/types";

export interface ImagesState {
  images: Image[];
  errors: string;
  status: string;
}
interface ImageActions {
  type: string;
  payload: any; // Update the type based on your payload data type
}

const initialState: ImagesState = {
  images: [],
  errors: "",
  status: "",
};

export const imagesReducer = (
  state = initialState,
  { type, payload }: ImageActions
) => {
  switch (type) {
    case GET_IMAGES_REQUEST:
      return {
        ...state,
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: payload,
      };
    case GET_IMAGES_FAIL:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};
export default imagesReducer;
