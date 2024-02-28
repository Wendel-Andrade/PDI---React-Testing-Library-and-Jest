import { useCounter } from "../../hooks/useCounter";

export function Counter() {
  const { counter, increment, decrement, resetCounter } = useCounter();

  return (
    <>
      <button data-testid="increment-button" onClick={increment}>
        Increment
      </button>
      <button data-testid="decrement-button" onClick={decrement}>
        Decrement
      </button>
      <button data-testid="reset-counter-button" onClick={resetCounter}>
        Reset Counter
      </button>
      <p data-testid="counter-display">Count: {counter}</p>
    </>
  );
}
