import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation-component";

describe("navigation", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
  });
  afterEach(() => {
    cleanup();
  });

  test("has logo and shop links", () => {
    const links = screen.getAllByRole("link");
    expect(links[0].href).toContain("/");
    expect(links[0].textContent).toBe("crown.svg");
    expect(links[1].href).toContain("/shop");
    expect(links[1].textContent).toBe("Shop");
  });
});
