import CardListComponent from "./components/CardListComponent/CardListComponent.js";
import FooterComponent from "./components/FooterComponent/FooterComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import { getPokemonInfo, getPokemonList } from "./utils/utils.js";

(async () => {
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

const rootContainer = document.querySelector(".root");
const header = new HeaderComponent(rootContainer);
const footer = new FooterComponent(rootContainer);
header.render();
footer.render();
