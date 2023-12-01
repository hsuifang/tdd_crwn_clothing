import { render, screen, cleanup } from "@testing-library/react";
import SignUpForm from "./SignUpForm";

describe("SignupForm", () => {
  afterEach(() => {
    cleanup();
  });
  test.each`
    field              | label                 | type
    ${"name"}          | ${"Name"}             | ${"text"}
    ${"email"}         | ${"Email"}            | ${"email"}
    ${"password"}      | ${"Password"}         | ${"password"}
    ${"passwordAgain"} | ${"Confirm Password"} | ${"password"}
  `(
    'should has "$field" field, and need to be filled',
    ({ field, label, type }) => {
      const { getByLabelText } = render(<SignUpForm />);
      const input = getByLabelText(label);
      expect(input).toHaveAttribute("name", field);
      expect(input).toHaveAttribute("type", type);
    }
  );
  test.each`
    label
    ${"Name"}
    ${"Email"}
    ${"Password"}
    ${"Confirm Password"}
  `("has $label is required ", ({ label }) => {
    const { getByLabelText } = render(<SignUpForm />);
    const input = getByLabelText(label);
    expect(input).toBeRequired();
  });
  test("has a Signup Button", () => {
    const { getByRole } = render(<SignUpForm />);
    const button = getByRole("button", { name: "Sign Up", type: "submit" });
    expect(button).toBeInTheDocument();
  });
  test("has a title - Sign up with your email and password", () => {
    const { getByText } = render(<SignUpForm />);
    const title = getByText("Sign up with your email and password");
    expect(title).toBeInTheDocument();
  });
});
