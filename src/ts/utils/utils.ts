import { type PokemonInfo } from "../components/types.js";

export const getPokemonInfo = async (name: string) => {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  const response = await fetch(pokemonUrl);
  const pokemon = (await response.json()) as PokemonInfo;

  return pokemon;
};

export const convertToUpperCase = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);
