import React from "react";
import { Provider } from "react-redux";
// TO CREATE THE STORE
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import postReducer from "./postReducer";
// IN CASE WE NEED MULTIPLE CONTEXT
import postContext from "./postContext";

// CREATE A STORE TO PASS IT TO THE `PROVIDER`
const postStore = createStore(
  postReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// PROVIDER TAKES THE `STORE` PROP WHICH IS CREATED USING THE `CREATE STORE`

// POST STORE PROVIDER IS A COMPONENT THAT WRAPS THE PROVIDER TO PROVIDE THE STORE TO CHILD COMPONENTS

const PostStoreProvider = ({ children }) => (
  <Provider store={postStore} context={postContext}>
    {children}
  </Provider>
);

export default PostStoreProvider;
