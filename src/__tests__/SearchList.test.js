import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import SearchList from "../componets/SearchList";
import thunk from "redux-thunk";
import { dummyList } from "../moviesList";
import { initialState } from "../reducers/moviesReducer";

const mockStore = configureMockStore([thunk]);
const store = mockStore({ moviesReducer: initialState });
const mockItem = dummyList.movies[0];

test("SearchList page should work properly", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <SearchList itemData={mockItem} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
