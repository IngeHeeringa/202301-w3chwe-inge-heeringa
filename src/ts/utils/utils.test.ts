import { convertToUpperCase } from "./utils";

describe("Given a convertToUpperCase function", () => {
  describe("When it receives 'pikachu'", () => {
    test("Then it should return 'Pikachu'", () => {
      const text = "pikachu";
      const expectedResult = "Pikachu";

      const result = convertToUpperCase(text);

      expect(result).toBe(expectedResult);
    });
  });
});
