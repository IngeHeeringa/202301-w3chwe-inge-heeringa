import { getPokemonInfo, getPokemonList } from "../../utils/utils.js";
import CardListComponent from "../CardListComponent/CardListComponent.js";
import Component from "../Component/Component.js";
import FooterComponent from "../FooterComponent/FooterComponent.js";
import HeaderComponent from "../HeaderComponent/HeaderComponent.js";
import { type PokemonInfo } from "../types.js";

class PageComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "root container", "div");
    this.parentElement = parentElement;
  }

  render() {
    super.render();

    (async () => {
      const header = new HeaderComponent(this.domElement);
      header.render();

      const pokemonListResponse = await getPokemonList(1, 8);
      let pokemons = [];
      for (let i = 1; i <= pokemonListResponse.results.length; i++) {
        const pokemon = getPokemonInfo(i);
        pokemons.push(pokemon);
      }

      pokemons = await Promise.all(pokemons);

      const cardList = new CardListComponent(
        this.domElement,
        pokemons,
        pokemonListResponse
      );

      cardList.render();

      const footer = new FooterComponent(this.domElement, pokemonListResponse);
      footer.render();

      const teamButton = this.domElement.querySelector(
        ".main-navigation__link"
      );

      teamButton.addEventListener("click", async () => {
        cardList.domElement.remove();
        footer.domElement.remove();

        const response = await fetch(
          "https://two02301-w3chwe-pokeapi-inge-heeringa.onrender.com/pokemon/"
        );

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const myPokemons = (await response.json()).map(
          (pokemonData: { pokemon: PokemonInfo }) => pokemonData.pokemon
        ) as PokemonInfo[];

        const myTeam = new CardListComponent(
          this.domElement,
          myPokemons,
          pokemonListResponse
        );
        myTeam.render();
      });
    })();
  }
}

export default PageComponent;
