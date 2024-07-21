import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../app/page";
import Bio from "../app/_components/Bio";

// Triple A
describe("Home", () => {
  it("Bio text", () => {
    render(<Bio />); // ARRANGE

    const myElem = screen.getByText("functionality"); // ACT

    expect(myElem).toBeInTheDocument(); // ASSERT
  });

  it("should have text 'mobile'", () => {
    render(<Bio />); // ARRANGE

    const myElem = screen.getByText(/mobile/i); // ACT

    expect(myElem).toBeInTheDocument(); // ASSERT
  });
});
