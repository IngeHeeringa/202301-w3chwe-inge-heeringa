import { getPokemonInfo, getPokemonList } from "../../utils/utils.js";
import CardListComponent from "../CardListComponent/CardListComponent.js";
import Component from "../Component/Component.js";
import { type PokemonListResponse } from "../types.js";

class FooterComponent extends Component {
  offsetCounter: number;
  pokemonListResponse: PokemonListResponse;

  constructor(
    parentElement: Element,
    pokemonListResponse: PokemonListResponse,
    offsetCounter = 1
  ) {
    super(parentElement, "main-footer container", "footer");
    this.parentElement = parentElement;
    this.offsetCounter = offsetCounter;
    this.pokemonListResponse = pokemonListResponse;
  }

  render() {
    super.render();

    this.domElement.innerHTML = `
    <button class="btn btn-secondary list-navigation list-navigation--previous"><</button><span>${
      this.offsetCounter + 7
    }/${
      this.pokemonListResponse.count
    }</span><button class="btn btn btn-secondary list-navigation list-navigation--next">></button>
    `;

    const nextButton = document.querySelector(".list-navigation--next");
    nextButton.addEventListener("click", async () => {
      this.offsetCounter += 8;
      const pokemonListResponse = await getPokemonList(this.offsetCounter, 8);
      let pokemons = [];
      for (
        let i = this.offsetCounter;
        i <= pokemonListResponse.results.length + this.offsetCounter;
        i++
      ) {
        const pokemon = getPokemonInfo(i);
        pokemons.push(pokemon);
        this.render();
      }

      pokemons = await Promise.all(pokemons);

      const previousCardList = document.querySelector(".card-list");
      previousCardList.remove();

      const rootContainer = document.querySelector(".root");

      const cardList = new CardListComponent(
        rootContainer,
        pokemons,
        pokemonListResponse
      );

      cardList.render();
    });

    const previousButton = document.querySelector(".list-navigation--previous");
    previousButton.addEventListener("click", async () => {
      this.offsetCounter -= 8;
      const pokemonListResponse = await getPokemonList(this.offsetCounter, 8);
      let pokemons = [];
      for (
        let i = this.offsetCounter;
        i <= pokemonListResponse.results.length + this.offsetCounter;
        i++
      ) {
        const pokemon = getPokemonInfo(i);
        pokemons.push(pokemon);
        this.render();
      }

      pokemons = await Promise.all(pokemons);

      const previousCardList = document.querySelector(".card-list");
      previousCardList.remove();

      const rootContainer = document.querySelector(".root");

      const cardList = new CardListComponent(
        rootContainer,
        pokemons,
        pokemonListResponse
      );
      cardList.render();
    });
  }
}

export default FooterComponent;
