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
    const authHeader = `Basic ${btoa(
      "975472555788128:hGn6q5UHUYNYoQJqPAZ4ouZqpaU"
    )}`;

    const response = await axios.get("http://localhost:3001/api/cloudinary", {
      headers: {
        Authorization: authHeader,
      },
    });

    const images = response.data.resources.map((resource) => ({
      public_id: resource.asset_id,
      folder: resource.folder,
      secure_url: resource.secure_url,
      format: resource.format,
      created_at: resource.created_at,
    }));
    console.log(images);
    dispatch({
      type: GET_IMAGES_SUCCESS,
      payload: images,
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    dispatch({
      type: GET_IMAGES_FAIL,
      payload: error.message,
    });
  }
};
