import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for additional matchers
import Home from "../home";

// Mocking modules that are not relevant to the actual test
jest.mock("highcharts/highcharts-3d");

describe("<Home />", () => {
  it("renders <Home /> component in root", () => {
    // Render the component
    render(<Home />);
  });
});
