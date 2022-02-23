import { dummyList } from "../moviesList";
import { MOVIES_LIST, FILTER_LIST, CLEAR_FILTER } from "../type";

const initialState = {
  movies: [],
  filter: [],
  isFilter: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_LIST:
      return {
        ...state,
        movies: dummyList.movies,
        filter: [],
        isFilter: false,
      };

    case FILTER_LIST:
      return {
        ...state,
        filter: action.payload?.trim().length
          ? dummyList.movies.filter(
              (item) =>
                item.title
                  .toLowerCase()
                  .includes(action.payload.toLowerCase()) ||
                item.category
                  .toLowerCase()
                  .includes(action.payload.toLowerCase()) ||
                item.rating === parseInt(action.payload) ||
                item.genres.includes(action.payload)
            )
          : [],
        isFilter: action.payload?.trim().length,
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filter: [],
        isFilter: false
      };

    default:
      return state;
  }
};

export default reducer;
