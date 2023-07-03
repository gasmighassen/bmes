export const GET_IMAGES_REQUEST = "GET_IMAGES_REQUEST";
export const GET_IMAGES_SUCCESS = "GET_IMAGES_SUCCESS";
export const GET_IMAGES_FAIL = "GET_IMAGES_FAIL";

interface GetImageRequest {
  type: typeof GET_IMAGES_REQUEST;
  payload: string;
}
interface GetImageSuccess {
  type: typeof GET_IMAGES_SUCCESS;
  payload: any;
}
interface GetImageFail {
  type: typeof GET_IMAGES_FAIL;
  payload: string;
}
export type ImagesAction = GetImageRequest | GetImageSuccess | GetImageFail;
