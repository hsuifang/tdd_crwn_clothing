import { render } from "@testing-library/react";
import Authentication from "./Index";

describe("Authentication", () => {
  test("when enter Signin, should has Signup components", () => {
    const { getByTestId } = render(<Authentication />);
    const signup = getByTestId("sign-up-form");
    expect(signup).toBeInTheDocument();
  });
  test("when enter Signin, should has Signin components", () => {
    const { getByTestId } = render(<Authentication />);
    const signup = getByTestId("sign-in-form");
    expect(signup).toBeInTheDocument();
  });
});
