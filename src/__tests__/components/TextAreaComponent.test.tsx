import { render, fireEvent, screen } from "@testing-library/react";
import { TextAreaComponent } from "../../components/TextAreaComponent";

describe("<TextAreaComponent />", () => {
  test("when clicking the button, the onSubmit function is called with the value of the textarea", () => {
    const onSubmitMock = jest.fn();
    render(<TextAreaComponent onSubmit={onSubmitMock} />);

    const textarea = screen.getByTestId("text-area");
    const submitButton = screen.getByTestId("submit-button");

    fireEvent.change(textarea, { target: { value: "New Message" } });
    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledWith("New Message");
  });
});
