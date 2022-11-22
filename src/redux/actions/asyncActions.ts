import axios from "axios";
import { Dispatch } from "redux";
import { AsyncAction, AsyncTypes } from "../types/asyncTypes";

export const fetchPosts = () => {
   return async (dispatch: Dispatch<AsyncAction>) => {
     try {
       dispatch({
         type: AsyncTypes.GET_POSTS_START,
       });
       const response = await axios.get(
         "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
       );
        dispatch({
          type: AsyncTypes.GET_POSTS_SUCCESS,
          payload: response.data,
        });
       
     } catch (error: any) {
       dispatch({
         type: AsyncTypes.GET_POSTS_FAILURE,
         payload: error.message,
       });
     }
   };
 };

