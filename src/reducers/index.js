import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";

const mainReducer = (history) =>
  combineReducers({
    moviesReducer,
    router: connectRouter(history),
  });

export default mainReducer;
