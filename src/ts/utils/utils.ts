import {
  type PokemonListResponse,
  type PokemonInfo,
} from "../components/types.js";

export const getPokemonList = async (
  offsetNumber: number,
  limitNumber: number
) => {
  const pokemonListUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offsetNumber}&limit=${limitNumber}`;
  const response = await fetch(pokemonListUrl);
  const pokemonList = (await response.json()) as PokemonListResponse;

  return pokemonList;
};

export const getPokemonInfo = async (id: number): Promise<PokemonInfo> => {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const response = await fetch(pokemonUrl);
  const pokemon = (await response.json()) as PokemonInfo;

  return pokemon;
};

export const convertToUpperCase = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);
