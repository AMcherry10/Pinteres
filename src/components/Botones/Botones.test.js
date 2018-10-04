import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";
import Botones from "../Botones/Botones";
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() });

describe("Botones Component", () => {
 
  // make our assertion and what we expect to happen 
  it("hace render de componente", () => {
    expect(shallow(<Botones />).find("div.buttons").exists()).toBe(true)
  })

  it("render correcto", () => {
    const component = renderer.create(
      <Botones/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
 })