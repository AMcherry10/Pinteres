import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";
import Imagen from "../Imagen/Imagen";
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() });

describe("Imagen Component", () => {
 
  // make our assertion and what we expect to happen 
  it("hace render de componente", () => {
    expect(shallow(<Imagen />).find("div.Imagen-content").exists()).toBe(true)
  })

  it("render correcto", () => {
    const component = renderer.create(
      <Imagen />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
 })