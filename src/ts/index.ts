import CardListComponent from "./components/CardListComponent/CardListComponent.js";
import FooterComponent from "./components/FooterComponent/FooterComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/PageComponent/PageComponent.js";
import { getPokemonInfo, getPokemonList } from "./utils/utils.js";

const pageComponent = new PageComponent(document.body);
pageComponent.render();
