// 💡 while using rootstore rmeove context

import React from "react";
import { Provider } from "react-redux";
// TO CREATE THE STORE
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// CREATE A STORE TO PASS IT TO THE `PROVIDER`
const rootStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// PROVIDER TAKES THE `STORE` PROP WHICH IS CREATED USING THE `CREATE STORE`

// ROOT STORE PROVIDER IS A COMPONENT THAT WRAPS THE PROVIDER TO PROVIDE THE STORE TO CHILD COMPONENTS

const RootStoreProvider = ({ children }) => (
  <Provider store={rootStore}>{children}</Provider>
);

export default RootStoreProvider;
