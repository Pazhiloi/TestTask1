export interface asyncState {
  posts: any[];
  isFetching: boolean;
  errorMessage: string | null | undefined;
}

export enum AsyncTypes {
  GET_POSTS_START = "GET_POSTS_START",
  GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
  GET_POSTS_FAILURE = "GET_POSTS_FAILURE",
}

interface getPostsStart {
  type: AsyncTypes.GET_POSTS_START;
}
interface getPostsSuccess {
  type: AsyncTypes.GET_POSTS_SUCCESS;
  payload: any[];
}
interface getPostsFailure {
  type: AsyncTypes.GET_POSTS_FAILURE;
  payload: string;
}

export type AsyncAction = getPostsStart | getPostsSuccess | getPostsFailure;
