import { type PokemonListResponse, type PokemonInfo } from "../types";
import CardListComponent from "./CardListComponent";

describe("Given a CardListComponent component", () => {
  describe("When it's rendered with [{name: '', id: 1}, {name: '', id: 2}]]", () => {
    test("Then it should show a list of 2 Pokémon cards on the screen", () => {
      const container = document.createElement("div");
      const pokemons: PokemonInfo[] = [
        {
          name: "",
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
        },
        {
          name: "",
          id: 2,
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
        },
      ];
      const pokemonListResponse: PokemonListResponse = {
        results: [
          {
            name: "",
          },
        ],
      };

      const cardList = new CardListComponent(
        container,
        pokemons,
        pokemonListResponse
      );
      cardList.render();
      const list = container.querySelector(".card-list").innerHTML;

      expect(list).not.toBe(null);
    });
  });
});
