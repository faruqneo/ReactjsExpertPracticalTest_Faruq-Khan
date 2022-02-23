import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
// import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import BannerPreviewer from "../componets/BannerPreviewer";
import { dummyList } from "../moviesList";

const mockStore = configureMockStore();
const store = mockStore({});
const mockItem = dummyList.movies[0];

test("Open modal when click on banner", () => {
  const component = renderer.create(
    <Provider store={store}>
      <BannerPreviewer item={mockItem} />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});