import React from "react";
import { shallow } from "enzyme";
import MovieModal from "../componets/MovieModal";

test("MovieModal page should open properly", () => {
  const wrapper = shallow(<MovieModal open={true} />);
  expect(wrapper).toMatchSnapshot();
});
