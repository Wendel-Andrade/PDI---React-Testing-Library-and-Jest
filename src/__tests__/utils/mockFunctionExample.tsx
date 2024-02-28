type Callback<T> = (item: T) => void;

function forEach<T>(items: T[], callback: Callback<T>): void {
  items.forEach(callback);
}

const mockCallback = jest.fn((x) => 42 + x);

test("forEach mock function", () => {
  forEach([0, 1], mockCallback);

  expect(mockCallback.mock.calls).toHaveLength(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
});

const mockTest = jest.fn();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const newMock = new mockTest();

mockTest.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

describe("mockFn", () => {
  const NUMBER_MOCK = 10;

  const myMockFn = jest
    .fn()
    .mockReturnValue("default")
    .mockImplementation((scalar) => NUMBER_MOCK + scalar)
    .mockName("mockSum");

  expect(myMockFn(10)).toBe(20);
  expect(myMockFn(5)).toBe(15);
  expect(myMockFn(20)).toBe(30);

  expect(myMockFn).toHaveBeenCalledTimes(3); // quantas vezes foi chamado

  expect(myMockFn).toHaveBeenCalledWith(10); // verifica com quais argumentos o mock foi chamado
  expect(myMockFn).toHaveBeenCalledWith(5);

  expect(myMockFn).toHaveBeenLastCalledWith(20);

  expect(myMockFn.getMockName()).toBe("mockSum"); // verifica o 'mockName' se configurado
});
