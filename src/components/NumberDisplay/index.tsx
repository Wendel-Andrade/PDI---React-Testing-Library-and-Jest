import { useRef } from "react";

let idCounter = 1;

type NumberDisplayProps = {
  number: number;
};

export function NumberDisplay({ number }: NumberDisplayProps) {
  const id = useRef(idCounter++);

  return (
    <div style={{ marginBottom: "10px" }}>
      <span data-testid="number-display">{number}</span>
      <span data-testid="instance-id">{id.current}</span>
    </div>
  );
}
