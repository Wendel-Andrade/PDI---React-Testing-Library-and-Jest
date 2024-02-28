import { useCounter } from "../../hooks/useCounter";
import { renderHook, act } from "@testing-library/react";

describe("userCounter", () => {
  test("should increment counter", () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.increment();
    });

    expect(result.current.counter).toBe(1);
  });

  test("should decrement counter", () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.counter).toBe(-1);
  });

  test("should reset counter", () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.resetCounter();
    });

    expect(result.current.counter).toBe(0);
  });
});
