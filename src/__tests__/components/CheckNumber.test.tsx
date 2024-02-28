import { CheckNumber } from "../../components/CheckNumber";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

function getInput() {
  return screen.getByPlaceholderText("enter the number");
}

describe("<CheckNumber />", () => {
  test("renders a title", () => {
    render(<CheckNumber />);

    const title = screen.getByText("Component even or odd");

    expect(title).toBeInTheDocument();
  });

  test("renders a input", () => {
    render(<CheckNumber />);

    const input = getInput();

    expect(input).toBeInTheDocument();
  });

  describe("when there is no error", () => {
    test("renders the error message section empty", () => {
      render(<CheckNumber />);

      const alert = screen.getByRole("alert");

      expect(alert).toBeInTheDocument();
      expect(alert).toHaveTextContent("");
    });
  });

  describe("when the user types an odd number", () => {
    test("renders odd number on the screen", () => {
      render(<CheckNumber />);

      const input = getInput();

      userEvent.clear(input);
      userEvent.type(input, "1");

      const section = screen.getByRole("presentation");

      expect(section).toHaveTextContent("Odd");
      expect("Odd").toMatch(/Odd/);
    });
  });

  describe("when the user types an even number", () => {
    test("renders even number on the screen", () => {
      render(<CheckNumber />);

      const input = getInput();

      userEvent.clear(input);
      userEvent.type(input, "12");

      const section = screen.getByRole("presentation");

      expect(section).toHaveTextContent("Even");
      expect("Even").toMatch(/Even/);
    });
  });

  describe("when the user types a not number value", () => {
    test("renders the error message on the screen", () => {
      render(<CheckNumber />);

      const input = getInput();

      userEvent.clear(input);
      userEvent.type(input, "anything");

      const section = screen.getByRole("alert");

      expect(section).toHaveTextContent("Please enter another number");
    });
  });

  describe("snapshot from <CheckNumber />", () => {
    const component = renderer.create(<CheckNumber />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
