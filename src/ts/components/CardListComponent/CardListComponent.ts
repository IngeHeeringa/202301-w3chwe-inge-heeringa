import CardComponent from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";
import { type PokemonListResponse, type PokemonInfo } from "../types";

class CardListComponent extends Component {
  pokemonList: PokemonListResponse;
  pokemons: PokemonInfo[];

  constructor(
    parentElement: Element,
    pokemons: PokemonInfo[],
    pokemonListResponse: PokemonListResponse
  ) {
    super(parentElement, "card-list row row-cols-2", "ul");
    this.parentElement = parentElement;
    this.pokemonList = pokemonListResponse;
    this.pokemons = pokemons;
  }

  render() {
    super.render();

    this.domElement.innerHTML = this.pokemonList.results
      .map(() => `<li class="card-container"></li>`)
      .join("");

    this.domElement
      .querySelectorAll(".card-container")
      .forEach((container, position) => {
        const card = new CardComponent(container, this.pokemons[position]);
        card.render();
      });
  }
}

export default CardListComponent;
