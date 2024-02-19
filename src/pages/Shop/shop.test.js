import { render, screen } from "@testing-library/react";
import { ProductContext } from "../../contexts/product.context";
import Shop from ".";
import PRODCUCTS from "../../shop-data.json";

describe("Shop", () => {
  test("render the Products in shop", () => {
    render(
      <ProductContext.Provider value={{ products: PRODCUCTS }}>
        <Shop />
      </ProductContext.Provider>
    );
    const categories = screen.getAllByTestId("product-card-container");
    expect(categories.length).toBe(9);
  });
});
