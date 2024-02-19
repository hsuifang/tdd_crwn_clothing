import { render, cleanup } from "@testing-library/react";
import ProductCard from "./ProductCard";

const product = {
  id: 1,
  name: "Brown Brim",
  imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
  price: 25,
};

describe("ProductCard", () => {
  afterEach(() => {
    cleanup();
  });

  test("should render product card", () => {
    const screen = render(<ProductCard product={product} />);
    const img = screen.getByRole("img");
    const button = screen.getByRole("button", { text: "Add to card" });
    const name = screen.getByText("Brown Brim");
    const price = screen.getByText("25");
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
