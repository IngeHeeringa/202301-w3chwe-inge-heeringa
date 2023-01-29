import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "main-header", "header");
    this.parentElement = parentElement;
  }

  render() {
    super.render();

    this.domElement.innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokémon logo">
    `;
  }
}

export default HeaderComponent;