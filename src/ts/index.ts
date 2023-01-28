import CardListComponent from "./components/CardListComponent/CardListComponent.js";
import { getPokemonInfo, getPokemonList } from "./utils/utils.js";

(async () => {
  const rootContainer = document.querySelector(".root");
  const pokemonListResponse = await getPokemonList(1, 8);
  let pokemons = [];
  for (let i = 1; i <= pokemonListResponse.results.length; i++) {
    const pokemon = getPokemonInfo(i);
    pokemons.push(pokemon);
  }

  pokemons = await Promise.all(pokemons);

  const cardList = new CardListComponent(
    rootContainer,
    pokemons,
    pokemonListResponse
  );
  cardList.render();
})();
