import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  describe("UI", () => {
    test("Has Category Compoent", () => {
      render(<App />);
      screen.debug();
      const category = screen.getByTestId("category-menu");
      expect(category).toBeInTheDocument();
    });
  });
});
