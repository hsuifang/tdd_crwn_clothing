import { screen, render } from "@testing-library/react";
import Button from "./button-component";

describe("Button", () => {
  test("has button", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("button style - inverted", () => {
    render(<Button buttonType="inverted" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("inverted");
  });

  test("button style - google", () => {
    render(<Button buttonType="google" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("google-sign-in");
  });

  test("render text in button", () => {
    render(<Button>Sign In</Button>);
    const button = screen.getByText("Sign In");
    expect(button).toBeInTheDocument();
  });
});
