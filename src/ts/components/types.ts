export interface ComponentStructure {
  domElement: Element;
  render: () => void;
  addListeners?: () => void;
}

export interface PokemonInfo {
  name: string;
  id: number;
  types: Type[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export interface Type {
  type: {
    name: string;
  };
}

export interface PokemonListResponse {
  results: [
    {
      name: string;
    }
  ];
}
