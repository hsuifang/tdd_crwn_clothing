import { render, cleanup } from "@testing-library/react";
import SignInForm from "./SignInForm";

describe("SignInForm", () => {
  afterEach(() => {
    cleanup();
  });
  test.each`
    field         | label         | type
    ${"email"}    | ${"Email"}    | ${"email"}
    ${"password"} | ${"Password"} | ${"password"}
  `(
    'should has "$field" field, and need to be filled',
    ({ field, label, type }) => {
      const { getByLabelText } = render(<SignInForm />);
      const input = getByLabelText(label);
      expect(input).toHaveAttribute("name", field);
      expect(input).toHaveAttribute("type", type);
    }
  );
  test.each`
    label
    ${"Email"}
    ${"Password"}
  `("has $label is required ", ({ label }) => {
    const { getByLabelText } = render(<SignInForm />);
    const input = getByLabelText(label);
    expect(input).toBeRequired();
  });
  test("has a Signin Button", () => {
    const { getByRole } = render(<SignInForm />);
    const button = getByRole("button", { name: "Sign In", type: "submit" });
    expect(button).toBeInTheDocument();
  });
  test("has a google Button", () => {
    const { getByRole } = render(<SignInForm />);
    const button = getByRole("button", {
      name: "Google Sign In",
      type: "button",
    });
    expect(button).toBeInTheDocument();
  });
  test("has a title - Sign in with your email and password", () => {
    const { getByText } = render(<SignInForm />);
    const title = getByText("Sign in with your email and password");
    expect(title).toBeInTheDocument();
  });
});
