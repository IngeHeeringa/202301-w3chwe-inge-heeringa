import { convertToUpperCase } from "../../utils/utils.js";
import Component from "../Component/Component.js";
import { type PokemonInfo, type PokemonInfo as Type } from "../types.js";

class TypeComponent extends Component {
  pokemon: PokemonInfo;

  constructor(parentElement: Element, pokemon: PokemonInfo) {
    super(parentElement, "pokemon-types", "div");
    this.parentElement = parentElement;
    this.pokemon = pokemon;
  }

  render() {
    super.render();

    this.domElement.innerHTML = this.getType().join("");
  }

  getType() {
    return this.pokemon.types.map(
      (type) =>
        `<span class="pokemon-type pokemon-type--${
          type.type.name
        }">${convertToUpperCase(type.type.name)}</span>`
    );
  }
}

export default TypeComponent;
