import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import MovieDetails from "../componets/MovieDetails";
import thunk from "redux-thunk";
import { dummyList } from "../moviesList";

const mockStore = configureMockStore([thunk]);
const store = mockStore({});
const mockItem = dummyList.movies[0];

test("MovieDetails page should open properly", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <MovieDetails info={mockItem} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
