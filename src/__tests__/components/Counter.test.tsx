import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "../../components/Counter";

describe("<Counter />", () => {
  test("renders with initial count", () => {
    render(<Counter />);

    const counterDisplay = screen.getByTestId("counter-display");

    expect(counterDisplay).toHaveTextContent("Count: 0");
  });

  test("increments count when button is clicked", () => {
    render(<Counter />);
    const counterDisplay = screen.getByTestId("counter-display");
    const incrementButton = screen.getByTestId("increment-button");

    fireEvent.click(incrementButton);

    expect(counterDisplay).toHaveTextContent("Count: 1");
  });

  test("decrement count when button is clicked", () => {
    render(<Counter />);
    const counterDisplay = screen.getByTestId("counter-display");
    const decrementButton = screen.getByTestId("decrement-button");

    fireEvent.click(decrementButton);

    expect(counterDisplay).toHaveTextContent("Count: -1");
  });

  test("reset counter count when button is clicked", () => {
    render(<Counter />);
    const counterDisplay = screen.getByTestId("counter-display");
    const resetCounterButton = screen.getByTestId("reset-counter-button");

    fireEvent.click(resetCounterButton);

    expect(counterDisplay).toHaveTextContent("Count: 0");
  });

  test("unmounts the component", () => {
    const { container, unmount } = render(<Counter />);
    const counterDisplay = screen.getByTestId("counter-display");
    const incrementButton = screen.getByTestId("increment-button");

    fireEvent.click(incrementButton);
    expect(counterDisplay).toHaveTextContent("Count: 1");

    unmount();

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toBeNull();
  });

  test("increment snapshot", () => {
    const { asFragment } = render(<Counter />);

    const incrementButton = screen.getByTestId("increment-button");

    fireEvent.click(incrementButton);

    const componentIsFragment = asFragment();

    expect(componentIsFragment).toMatchSnapshot();
  });

  test("decrement snapshot", () => {
    const { asFragment } = render(<Counter />);

    const decrementButton = screen.getByTestId("decrement-button");

    fireEvent.click(decrementButton);

    const componentIsFragment = asFragment();

    expect(componentIsFragment).toMatchSnapshot();
  });

  test("reset counter snapshot", () => {
    const { asFragment } = render(<Counter />);

    const resetCounterButton = screen.getByTestId("reset-counter-button");

    fireEvent.click(resetCounterButton);

    const componentIsFragment = asFragment();

    expect(componentIsFragment).toMatchSnapshot();
  });
});
