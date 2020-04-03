import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

//  Cleans up after each test
afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Button />, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="click me please" />);

  expect(getByTestId("button")).toHaveTextContent("click me please");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button label="save" />).toJSON();
  expect(tree).toMatchSnapshot();
});
