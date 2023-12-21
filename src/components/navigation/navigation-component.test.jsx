import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
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
    expect(links[1].textContent).toBe("SHOP");
  });
  test("has auth link", () => {
    const links = screen.getAllByRole("link");
    expect(links[2].href).toContain("/auth");
    expect(links[2].textContent).toBe("SIGN IN");
  });
  test("renders SIGN IN when user is not logged in", () => {
    const link = screen.getByRole("link", { name: "SIGN IN" });
    expect(link).toBeInTheDocument();
  });
  test("renders SIGN IN when user is not logged in", () => {
    const user = { id: "1", email: "ss@gmail.com", password: "ss" };
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser: user }}>
          <Navigation />
        </UserContext.Provider>
      </BrowserRouter>
    );
    const link = screen.getByText("SIGN OUT");
    expect(link).toBeInTheDocument();
  });

  test("click signout button", async () => {
    const user = { id: "1", email: "ss@gmail.com", password: "ss" };
    render(
      <BrowserRouter>
        <UserContext.Provider
          value={{ currentUser: user, setCurrentUser: () => {} }}
        >
          <Navigation />
        </UserContext.Provider>
      </BrowserRouter>
    );
    const link = screen.getByText("SIGN OUT");
    await userEvent.click(link);
    expect(screen.getByRole("link", { name: "SIGN IN" })).toBeInTheDocument();
  });
});
