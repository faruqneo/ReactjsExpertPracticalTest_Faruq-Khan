import { MOVIES_LIST, FILTER_LIST, CLEAR_FILTER } from "./type";

export const fetchList = () => {
  return (dispatch) => {
    dispatch({
      type: MOVIES_LIST,
    });
  };
};

export const fetchFilterList = (searchElement) => {
  return (dispatch) => {
    dispatch({
      type: FILTER_LIST,
      payload: searchElement,
    });
  };
};

export const filterClearList = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };
};
