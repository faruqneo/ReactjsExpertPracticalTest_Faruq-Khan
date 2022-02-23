import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
// import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import MovieList from "../componets/MovieList";
import thunk from "redux-thunk";
import { dummyList } from "../moviesList";

const mockStore = configureMockStore([thunk]);
const store = mockStore({});
const mockItem = dummyList.movies[0];

test("MoviesHome page should open properly", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MovieList itemData={mockItem} />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});