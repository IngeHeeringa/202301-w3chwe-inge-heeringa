import { type PokemonInfo } from "../types";
import TypeComponent from "./TypeComponent";

describe("Given a TypeComponent component", () => {
  describe("When it's rendered with 'charizard'", () => {
    test("Then it should show 'fire' and 'flying' types on the Pokémon card", () => {
      const container = document.createElement("div");
      const charizard: PokemonInfo = {
        name: "charizard",
        id: 1,
        types: [
          {
            type: {
              name: "fire",
            },
          },
          {
            type: {
              name: "flying",
            },
          },
        ],
        sprites: {
          other: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            dream_world: {
              // eslint-disable-next-line @typescript-eslint/naming-convention
              front_default: "",
            },
          },
        },
      };

      const typeComponent = new TypeComponent(container, charizard);
      typeComponent.render();
      const types = [
        container.querySelector(".pokemon-type--fire").textContent,
        container.querySelector(".pokemon-type--flying").textContent,
      ];

      expect(types).toStrictEqual(["Fire", "Flying"]);
    });
  });
});
