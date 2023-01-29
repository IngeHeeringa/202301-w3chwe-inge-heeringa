import Component from "../Component/Component.js";
import { type PokemonInfo } from "../types.js";
import { convertToUpperCase } from "../../utils/utils.js";
import TypeComponent from "../TypeComponent/TypeComponent.js";

class CardComponent extends Component {
  pokemon: PokemonInfo;

  constructor(parentElement: Element, pokemon: PokemonInfo) {
    super(parentElement, "card pokemon-card", "article");
    this.parentElement = parentElement;
    this.pokemon = pokemon;
  }

  render() {
    super.render();

    this.domElement.innerHTML = `
    <button class="btn btn-secondary pokemon-card__add-favorite">Add to team</button>
          <img class="pokemon-card__image" src=${
            this.pokemon.sprites.other.dream_world.front_default
          } alt="${convertToUpperCase(this.pokemon.name)}">
            <div class="card-body pokemon-card__content">
              <div class="card-info-wrapper">
                <h3 class="pokemon-card__title card-title">${convertToUpperCase(
                  this.pokemon.name
                )}</h3>
                <span>#${this.pokemon.id}</span>
              </div>
            </div>
    `;

    const type = new TypeComponent(
      this.domElement.querySelector(".card-body"),
      this.pokemon
    );
    type.render();

    const addButton = this.domElement.querySelector(
      ".pokemon-card__add-favorite"
    );
    addButton.addEventListener("click", async () => {
      await fetch(
        "https://two02301-w3chwe-pokeapi-inge-heeringa.onrender.com/pokemon/",
        {
          method: "POST",
          body: JSON.stringify({
            pokemon: this.pokemon,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      ).then(async (response) => response.json());
    });
  }
}

export default CardComponent;
