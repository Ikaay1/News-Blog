import { createAction } from "@reduxjs/toolkit";

export const FETCH_ALL = createAction("FETCH_ALL");
export const FETCHALL = createAction("FETCHALL");
export const FETCH_POST = createAction("FETCH_POST");
export const FETCH_BY_SEARCH = createAction("FETCH_BY_SEARCH");
export const FETCH_BY_CATEGORY = createAction("FETCH_BY_CATEGORY");
export const FETCH_RELATED = createAction("FETCH_RELATED");
export const CREATE = createAction("CREATE");
export const UPDATE = createAction("UPDATE");
export const DELETE = createAction("DELETE");
export const LIKE = createAction("LIKE");
export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

const posts = (
  state = { isLoading: true, posts: [], relatedPosts: [] },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL.type:
      return {
        ...state,
        posts: action.payload.posts,
        numberOfPages: action.payload.numberOfPages,
        currentPage: action.payload.currentPage,
      };
    case FETCHALL.type:
      return {
        ...state,
        posts: action.payload,
      };
    case FETCH_BY_SEARCH.type:
      return { ...state, posts: action.payload };
    case FETCH_BY_CATEGORY.type:
      return { ...state, posts: action.payload };
    case FETCH_RELATED.type:
      return { ...state, relatedPosts: action.payload };
    case FETCH_POST.type:
      return { ...state, post: action.payload };
    case CREATE.type:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE.type:
    case LIKE.type:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE.type:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};

export default posts;
