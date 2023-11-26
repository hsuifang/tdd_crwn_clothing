import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  describe("UI", () => {
    test("Has Category Compoent", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      screen.debug();
      const category = screen.getByTestId("category-menu");
      expect(category).toBeInTheDocument();
    });
  });
});
