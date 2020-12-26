import React, { useEffect } from "react";
import { bindActionCreators, compose } from "redux";
import postContext from "./redux/posts/postContext";
import { connect } from "react-redux";

import { getPosts } from "./redux/posts/postActions";

const App = (props) => {
  const { getPosts } = props;
  useEffect(() => {
    getPosts();
  }, []);

  const handleClick = () => {
    getPosts();
  };

  return (
    <div className="App">
      REACT REDUX BOILERPLATE CODE
      <button onClick={handleClick}>click here to fetch again</button>
    </div>
  );
};

const mapPostDispatchToProps = (dispatch) =>
  bindActionCreators({ getPosts }, dispatch);

export default compose(
  connect(null, mapPostDispatchToProps, null, { context: postContext })
)(App);
