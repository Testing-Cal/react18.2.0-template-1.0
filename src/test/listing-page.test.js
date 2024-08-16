import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Listing from "../listing";

// Mocking modules that are not relevant to the actual test
jest.mock("highcharts/highcharts-3d");

describe("<Listing />", () => {
  it("renders <Listing /> component in root", () => {
    // Render the component
    render(<Listing />);
  });
});
