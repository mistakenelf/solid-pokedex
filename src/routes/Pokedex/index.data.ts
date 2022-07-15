import { createResource } from "solid-js";

import pokemonApi from "../../lib/pokemonApi";

export const PokemonData = () => {
  const [pokemonData] = createResource(() => pokemonApi.getPokemon());

  return pokemonData;
};
