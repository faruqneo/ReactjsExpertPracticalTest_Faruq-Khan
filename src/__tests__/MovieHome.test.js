import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
// import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import MovieHome from "../componets/MovieHome";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);
const store = mockStore({ moviesReducer: { movies: [], filter: [], isFilter: false } });

test("MoviesHome page should open properly", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MovieHome />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});