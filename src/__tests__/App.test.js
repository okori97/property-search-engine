import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";

test("renders a h2", () => {
  render(<App />);
  const linkElement = screen.getByText(/Surreal Estate/i);
  expect(linkElement).toBeInTheDocument();
});
