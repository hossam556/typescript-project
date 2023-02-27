import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import CheckBox from "../CheckBox";

describe("CheckBox", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<CheckBox labelOn="On" labelOff="Off" />);
  });

  test("snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("CheckboxWithLabel changes the text after click", () => {
    expect(component.text()).toBe("Off");

    component.find("input").simulate("change");

    expect(component.text()).toBe("On");
  });
});
