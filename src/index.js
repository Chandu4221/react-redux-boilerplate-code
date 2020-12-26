import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PostStoreProvider from "./redux/posts/PostStoreProvider";

ReactDOM.render(
  <React.StrictMode>
    <PostStoreProvider>
      <App />
    </PostStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
