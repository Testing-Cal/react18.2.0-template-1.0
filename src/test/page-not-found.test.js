import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for additional matchers
import PageNotFound from "../page-not-found";

describe("<PageNotFound />", () => {
  it("renders <PageNotFound /> component in root", () => {
    // Render the component
    render(<PageNotFound />);
  });
});
