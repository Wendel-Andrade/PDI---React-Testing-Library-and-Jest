import { useEffect, useState } from "react";

export const drinks: Record<string, string> = {
  lemon: "lemon",
  strawberry: "strawberry",
  peach: "peach",
};

export function deliverDrink(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Drink Delivered!");
    }, 1000);

    setTimeout(() => {
      reject(new Error("Drink Not Delivered!"));
    }, 1000);
  });
}

export function DrinkStore() {
  const [drink, setDrink] = useState<string>("");

  useEffect(() => {
    deliverDrink().then((result) => {
      return setDrink(result);
    });
  }, []);

  return (
    <div>
      <h1>Examples</h1>
      <p>To be example: {drinks.lemon}</p>
      <p>{drink}</p>
    </div>
  );
}
