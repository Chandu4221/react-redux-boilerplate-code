// IMPORT THE CONSTANTS FOR THE POST

import { FETCH_POST } from "./postConstants";

// REDUCER SHOULD CONTAIN THE INITIAL_STATE AND THE ACTION TO DISPATCH
const initialState = {
  postIds: [],
  postsById: {},
  loading: false,
  error: false,
  success: false,
};

// EVERY REDUCER SHOULD ATLEAST RETURN ONE DEFAULT STATE
const postReducer = (state = initialState, action) => {
  // const { type } = action;
  const { type, payload } = action;
  switch (type) {
    case FETCH_POST.PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST.SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        postIds: payload.postIds,
        postsById: payload.postsById,
      };
    case FETCH_POST.REJECT:
      return {
        ...state,
        loading: false,
        error: true,
      };

    // this is a test case
    case FETCH_POST.TEST_ACTION:
      return {
        ...state,
        success: payload.success,
      };
    default:
      return state;
  }
};

export default postReducer;
