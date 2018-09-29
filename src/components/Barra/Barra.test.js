import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";
import Barra from "../Barra/Barra";
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() });

describe("Barra Component", () => {
 
  // make our assertion and what we expect to happen 
  it("hace render de componente", () => {
    expect(shallow(<Barra />).find("div.container").exists()).toBe(true)
  })

  it("render correcto", () => {
    const component = renderer.create(
      <Barra/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
 })