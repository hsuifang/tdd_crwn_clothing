import { render, screen } from "@testing-library/react";
import Home from "./Index";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });
  describe("UI", () => {
    test("Has five category", () => {
      const category = screen.getAllByTestId("category");
      expect(category).toHaveLength(5);
    });

    test("each content in category", () => {
      const category = screen.getAllByTestId("category");
      const lists = ["Hats", "Jackets", "Sneakers", "Womens", "Mens"];
      category.forEach((item, idx) => {
        expect(item).toHaveTextContent(lists[idx]);
      });
    });

    test("has image in category", () => {
      const category = screen.getAllByTestId("category-container");
      category.forEach((item) => {
        expect(item.children[0].className.includes("background-image")).toBe(
          true
        );
      });
    });
  });
});
