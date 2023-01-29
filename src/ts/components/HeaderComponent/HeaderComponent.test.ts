import HeaderComponent from "./HeaderComponent";

describe("Given a HeaderComponent component", () => {
  describe("When it's rendered with a Pokémon logo", () => {
    test("Then it should show a header with a Pokémon logo on the screen", () => {
      const screen = document.createElement("div");
      const tag = "img";

      const headerComponent = new HeaderComponent(screen);
      headerComponent.render();

      const logo = screen.querySelector(tag);

      expect(logo).not.toBeNull();
    });
  });
});
