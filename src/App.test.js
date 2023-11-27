import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  describe("UI", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    });

    afterEach(() => {
      cleanup();
    });

    test("Has Category Compoent", () => {
      const category = screen.getByTestId("category-menu");
      expect(category).toBeInTheDocument();
    });
    test("Has A Navigation bar", () => {
      const navbar = screen.getByTestId("navigation");
      expect(navbar).toBeInTheDocument();
    });
  });
});
