import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "../dashboard";

// Mocking modules that are not relevant to the actual test
jest.mock("highcharts/highcharts-3d");

describe("<Dashboard />", () => {
  it("renders <Dashboard /> component in root", () => {
    // Render the component
    render(<Dashboard />);
  });
});
