import { type PokemonInfo } from "../types";
import CardComponent from "./CardComponent";

describe("Given a CardComponent component", () => {
  describe("When it's rendered with 'bulbasaur'", () => {
    test("Then it should show a Pokémon card of Bulbasaur on the screen", () => {
      const container = document.createElement("div");
      const bulbasaur: PokemonInfo = {
        name: "bulbasaur",
        id: 1,
        types: [],
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

      const card = new CardComponent(container, bulbasaur);
      card.render();
      const name = container.querySelector(".card-title").textContent;

      expect(name).not.toBeNull();
    });
  });
});
