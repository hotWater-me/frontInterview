import React from "react";
import { shallow } from "enzyme";
import { PictureSelect } from "../PictureSelect";

const pictures = [
  {
    id: "1",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ",
  },
  {
    id: "2",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ",
  },
  {
    id: "3",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ",
  },
];

const props = {
  value: [],
  setValue: jest.fn(),
  pictures,
};

const setup = () => {
  const wrapper = shallow(<PictureSelect {...props} />);
  return {
    wrapper,
    props,
  };
};

describe("PictureSelect", () => {
  it("renders correctly", () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it("click every Img", () => {
    const { wrapper, props } = setup();
    wrapper.find(".noCheck").at(0).simulate("click");
    expect(props.setValue).toHaveBeenCalled();
  });

  it("All check Img", () => {
    const { wrapper } = setup();
  console.log(wrapper.prop('value'))
  });
});
