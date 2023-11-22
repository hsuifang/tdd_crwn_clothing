import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  describe("UI", () => {
    test("Has five category", () => {
      render(<App />);
      const category = screen.getAllByTestId("category");
      expect(category).toHaveLength(5);
    });

    test("each content in category", () => {
      render(<App />);
      const category = screen.getAllByTestId("category");
      const lists = ["Hats", "Jackets", "Sneakers", "Womens", "Mens"];
      category.forEach((item, idx) => {
        expect(item).toHaveTextContent(lists[idx]);
      });
    });
  });
});
