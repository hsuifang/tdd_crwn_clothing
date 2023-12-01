import { render, screen } from "@testing-library/react";
import Signin from "./Signin";

describe("Signin", () => {
  test("when enter Signin, should has Signup components", () => {
    const { getByTestId } = render(<Signin />);
    const signup = getByTestId("sign-up-form");
    expect(signup).toBeInTheDocument();
  });
});
