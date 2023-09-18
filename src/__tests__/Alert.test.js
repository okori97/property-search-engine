import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("returns an error message with an error class when isSuccess is false", () => {
    render(<Alert message="Error!" isSuccess={false} />);
    const errorMessage = screen.getByText("Error!");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.className).toBe("Alert__error-message");
  });
  it("returns an success message with a success class when isSuccess is true", () => {
    render(<Alert message="Success!" isSuccess />);
    const errorMessage = screen.getByText("Success!");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.className).toBe("Alert__success-message");
  });

  it("renders correctly", () => {
    const { asFragment } = render(<Alert message="success" isSuccess />);

    expect(asFragment).toMatchSnapshot();
  });
});
