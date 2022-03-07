import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import BannerPreviewer from "../componets/BannerPreviewer";
import { dummyList } from "../moviesList";
import { initialState } from "../reducers/moviesReducer";

const mockStore = configureMockStore();
const store = mockStore({ moviesReducer: initialState });
const mockItem = dummyList.movies[0];

describe("should have the BannerPreview compoent", () => {
  const container = shallow(
    <Provider store={store}>
      <BannerPreviewer item={mockItem} />
    </Provider>
  );

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});