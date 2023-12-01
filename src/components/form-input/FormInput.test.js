import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormInput from "./FormInput";

describe("FormInput", () => {
  test("should render input", () => {
    const props = {
      name: "test",
      type: "text",
      placeholder: "test",
      onChange: () => {},
      label: "TESTlabel",
      value: "value",
    };

    const { getByLabelText } = render(<FormInput {...props} />);

    const input = getByLabelText("TESTlabel");
    expect(input).toBeInTheDocument();
    expect(input.getAttribute("name")).toBe("test");
    expect(input.getAttribute("type")).toBe("text");
    expect(input.getAttribute("value")).toBe("value");
    expect(input).toBeRequired();
  });

  test("should trigger onchange fn", async () => {
    const props = {
      name: "test",
      type: "text",
      placeholder: "test",
      onChange: jest.fn(),
      label: "TESTlabel",
      value: "value",
    };
    const { getByLabelText } = render(<FormInput {...props} />);
    const input = getByLabelText("TESTlabel");
    await userEvent.type(input, "test");
    await waitFor(() => {
      expect(props.onChange).toHaveBeenCalled();
    });
  });
});
