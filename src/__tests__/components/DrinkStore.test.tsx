import { DrinkStore, drinks } from "../../components/DrinkStore";
import { act, render, screen } from "@testing-library/react";

jest.useFakeTimers(); // simulação de tempurizador

function drinkAll(callback: (flavour: string) => void, flavour: string) {
  if (!flavour) {
    throw new Error("you need to specify a flavor");
  }

  if (flavour !== "octopus") {
    callback(flavour);
  }
}

function drinkEach(drink: (drink: string) => void, drinks: string[]) {
  drinks.forEach((item) => {
    drink(item);
  });
}

describe("the can", () => {
  test("has lemon drink", () => {
    expect(drinks?.lemon).toBe("lemon");
  });
  test("has strawberry drink", () => {
    expect(drinks?.strawberry).toBe("strawberry");
  });
  test("has peach drink", () => {
    expect(drinks?.peach).toBe("peach");
  });
});

describe("drinkAll", () => {
  test("drinks something lemon-flavoured", () => {
    const drink = jest.fn();
    drinkAll(drink, "lemon");
    expect(drink).toHaveBeenCalled();
  });

  test("does not drink something octopus-flavoured", () => {
    const drink = jest.fn();
    drinkAll(drink, "octopus");
    expect(drink).not.toHaveBeenCalled();
  });

  test("did not specify a flavor", () => {
    const drink = jest.fn();
    expect(() => drinkAll(drink, "")).toThrow();
    expect(() => drinkAll(drink, "")).toThrow(Error);

    expect(() => drinkAll(drink, "")).toThrow("you need to specify a flavor");
    expect(() => drinkAll(drink, "")).toThrow(/you need/);
    expect(() => drinkAll(drink, "")).toThrow(/^you need to specify a flavor$/);
  });
});

describe("total drinks ordered", () => {
  const drink = jest.fn();
  const allDrinks: string[] = ["lemon", "strawberry", "peach"];
  const totalDrinks = allDrinks.length;

  test("drinkEach drinks each drink", () => {
    drinkEach(drink, allDrinks);

    expect(drink).toHaveBeenCalledWith("lemon");
    expect(drink).toHaveBeenCalledWith("strawberry");
    expect(drink).toHaveBeenCalledWith("peach"); // verifica se o valor foi percorrido no array

    expect(drink).not.toHaveBeenCalledWith("octopus"); // verifica se não existiu o valor percorrido no array

    expect(drink).toHaveBeenLastCalledWith("peach"); // verifica o último resultado percorrido no array

    expect(drink).toHaveBeenCalledTimes(3); // verifica quantas vezes o array percorreu
    expect(drink).toBeDefined(); // verifica se foi definido, ou seja, contrário de UNDEFINED
  });

  test("totalDrinks", () => {
    expect(totalDrinks).toBeGreaterThan(2); // verifica se é MAIOR que:
    expect(totalDrinks).toBeLessThan(4); // verifica se é MENOR que:
    expect(totalDrinks).toBeLessThanOrEqual(3); // verifica se é MENOR ou IGUAL:
    expect(totalDrinks).toBeGreaterThanOrEqual(3); // verifica se é MAIOR ou IGUAL:

    expect(totalDrinks).toBe(3);
    expect(totalDrinks).toEqual(3);
  });

  test("allDrinks", () => {
    expect(allDrinks).toContain("lemon");
    expect(allDrinks).toContain("strawberry");
    expect(allDrinks).toContain("peach");

    expect(allDrinks).not.toContain("chicken");
  });
});

describe("delivery drink", () => {
  test("the delivered drink", async () => {
    render(<DrinkStore />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const drinkDelivered = screen.findByText("Drink Delivered!");

    await expect(drinkDelivered).resolves.toBeTruthy();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const drinkNotDelivered = screen.findByText("Drink Not Delivered!");

    await expect(drinkNotDelivered).rejects.toThrowError(
      "Drink Not Delivered!"
    );
  });
});
