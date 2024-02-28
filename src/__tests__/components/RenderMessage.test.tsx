import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { RenderMessage } from "../../components/RenderMessage";

describe("<RenderMessage />", () => {
  test("renders input correctly", () => {
    render(<RenderMessage message="" />);
    const inputElement = screen.getByPlaceholderText("Enter the message");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders typed message on screen when Enter key is pressed", () => {
    render(<RenderMessage message="" />);

    const inputElement = screen.getByPlaceholderText("Enter the message");

    fireEvent.change(inputElement, { target: { value: "Hello, world!" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });

  test("does not render empty message on screen when Enter key is pressed", () => {
    render(<RenderMessage message="" />);
    const inputElement = screen.getByPlaceholderText("Enter the message");

    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(screen.getByTestId("empty-paragraph")).toBeInTheDocument();
  });

  test("renders typed message in paragraph when Enter key is pressed", () => {
    render(<RenderMessage message="" />);

    const inputElement = screen.getByPlaceholderText("Enter the message");

    fireEvent.change(inputElement, { target: { value: "Hello, world!" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });
});
