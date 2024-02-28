import { useState } from "react";

export function useCounter() {
  const [counter, setCounter] = useState<number>(0);

  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  function resetCounter() {
    setCounter((prevCounter) => (prevCounter = 0));
  }

  return {
    counter,
    increment,
    decrement,
    resetCounter,
  };
}
