import { render, screen } from "@testing-library/react";
import { NumberDisplay } from "../../components/NumberDisplay";

describe("<NumberDisplay />", () => {
  test("calling render with the same component on the same container does not remount", () => {
    const { rerender } = render(<NumberDisplay number={10} />);
    expect(screen.getByTestId("number-display")).toHaveTextContent("10");

    rerender(<NumberDisplay number={30} />);
    expect(screen.getByTestId("number-display")).toHaveTextContent("30");

    expect(screen.getByTestId("instance-id")).toHaveTextContent("1");
  });

  test("renders text within a specific baseElement", () => {
    const customContainer = document.createElement("div");

    customContainer.id = "custom-container";

    document?.body?.appendChild(customContainer);

    render(<NumberDisplay number={10} />, { baseElement: customContainer });
  });
});
