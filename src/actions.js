import { MOVIES_LIST, FILTER_LIST, CLEAR_FILTER } from "./type";

export const fetchList = () => dispatch => {
  dispatch({
    type: MOVIES_LIST,
  });
};

export const fetchFilterList = searchElement => dispatch => {
  dispatch({
    type: FILTER_LIST,
    payload: searchElement,
  });
};;

export const filterClearList = () => dispatch => {
  dispatch({
    type: CLEAR_FILTER,
  });
};
