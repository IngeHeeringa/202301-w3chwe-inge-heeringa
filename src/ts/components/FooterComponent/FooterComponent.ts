import { getPokemonInfo, getPokemonList } from "../../utils/utils.js";
import CardListComponent from "../CardListComponent/CardListComponent.js";
import Component from "../Component/Component.js";

class FooterComponent extends Component {
  offsetCounter: number;

  constructor(parentElement: Element, offsetCounter = 1) {
    super(parentElement, "footer", "footer");
    this.parentElement = parentElement;
    this.offsetCounter = offsetCounter;
  }

  render() {
    super.render();

    this.domElement.innerHTML = `
    <footer class="main-footer container"><button class="btn btn-secondary list-navigation list-navigation--previous"><</button><span>${this.offsetCounter}/151</span><button class="btn btn btn-secondary list-navigation list-navigation--next">></button></footer>
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
