import { AsyncAction, asyncState, AsyncTypes } from "../types/asyncTypes";

const initialState: asyncState = {
  posts: [],
  isFetching: false,
  errorMessage: undefined,
};

const asyncReducer = (
  state = initialState,
  action: AsyncAction
): asyncState => {
  switch (action.type) {
    case AsyncTypes.GET_POSTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case AsyncTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload,
      };
    case AsyncTypes.GET_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default asyncReducer;
