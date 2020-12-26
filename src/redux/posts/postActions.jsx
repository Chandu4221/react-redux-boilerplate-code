// ACTIONS ARE FUNCTION WHICH SHOULD DISPATCH THE ACTION_TYPE AND ANY ACTION_PAYLOAD IF EXISTS

import axios from "axios";
import { normalize, schema } from "normalizr";
import assign from "lodash.assign";
import { FETCH_POST } from "./postConstants";

/* 
    TRYING TO NORMALIZE THE RESPONSE DATA
    RESPONSE DATA IS A ARRAY OF OBJECTS
    ------------------------------------
    NORMALIZING THE ARRAY OF OBJECTS TO CREATE A STORE THAT CONTAINS 
    
    * ITEMS_BY_ID -> OBJECT WITH ITEMS STORED WITH `ID` AS KEYS
    * ITEM_IDS -> ARRAY THAT CONTAINS ALL THE `ITEM_ID`s
    
*/

// NORMALIZR SCHEMA

const postsSchema = new schema.Entity(
  "posts", //entity name
  {},
  {
    idAttribute: "id", // defaults to `id` -> you can change it to unique key in the object
    processStrategy: (entity) => assign(entity, { isSelected: false }), // modify the existing object by adding new keys
  }
);
const postsListSchema = new schema.Array(postsSchema);

const getPosts = () => async (dispatch, getState) => {
  // getState -> function that returns the current state of the store
  const oldState = getState();

  // DISPATCH COMPLETELY A DIFERENT ACTION BASED ON THE PREVIOUS STATE
  if (oldState.success) {
    dispatch({
      type: FETCH_POST.TEST_ACTION,
      payload: {
        success:
          "DISPATCHED A COMPLETELY DIFFERENT STATE BASED ON PREVIOUS STATE",
      },
    });
    return;
  }

  dispatch({ type: FETCH_POST.PENDING });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const store = normalize(response.data, postsListSchema);
    dispatch({
      type: FETCH_POST.SUCCESS,
      payload: { postsById: store.entities.posts, postIds: store.result },
    });
  } catch (e) {
    dispatch({ type: FETCH_POST.REJECT });
    console.log("error inside the getPosts Action", e);
  }
};

export { getPosts };
