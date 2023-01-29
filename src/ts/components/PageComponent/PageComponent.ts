import { getPokemonInfo, getPokemonList } from "../../utils/utils.js";
import CardListComponent from "../CardListComponent/CardListComponent.js";
import Component from "../Component/Component.js";
import FooterComponent from "../FooterComponent/FooterComponent.js";
import HeaderComponent from "../HeaderComponent/HeaderComponent.js";

class PageComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "app", "div");
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

      const footer = new FooterComponent(this.domElement);
      footer.render();
    })();
  }
}

export default PageComponent;
