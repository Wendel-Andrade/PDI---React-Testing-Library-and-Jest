import { ChangeEvent, useState } from "react";

export function CheckNumber() {
  const [number, setNumber] = useState<string>("0");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isEven = parseInt(number) % 2 === 0;

  function checkNumber(event: ChangeEvent<HTMLInputElement>) {
    const rawValue = event.target.value;
    const numberValue = parseInt(rawValue);

    setNumber(rawValue);

    if (isNaN(numberValue)) {
      setErrorMessage("Please enter another number");
      return;
    }

    setErrorMessage("");
  }

  return (
    <div>
      <h1>Component even or odd</h1>
      <input
        type="text"
        name="number"
        placeholder="enter the number"
        value={number}
        onChange={(event) => checkNumber(event)}
      />
      <p role="presentation">{isEven ? "Even" : "Odd"}</p>
      <p role="alert">{errorMessage}</p>
    </div>
  );
}
