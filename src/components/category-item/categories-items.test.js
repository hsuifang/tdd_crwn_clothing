import { render, screen } from "@testing-library/react";
import CategoryItem from "./CategoryItem";

describe("CategoryItem", () => {
  describe("UI", () => {
    test("has image in category", () => {
      render(<CategoryItem />);
      const category = screen.getByTestId("category-container");
      expect(category.children[0].className.includes("background-image")).toBe(
        true
      );
    });
  });
});
