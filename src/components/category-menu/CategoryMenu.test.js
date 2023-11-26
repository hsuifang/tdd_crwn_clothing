import { render, screen } from "@testing-library/react";
import CategoryMenu from "./CategoryMenu";

describe("CategoryMenu", () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
  ];
  beforeEach(() => {
    render(<CategoryMenu categories={categories} />);
  });
  describe("UI", () => {
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
