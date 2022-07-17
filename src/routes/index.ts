import type { RouteDefinition } from "solid-app-router";

import { Pokedex } from "./Pokedex";
import { PokemonData } from "./Pokedex/index.data";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Pokedex,
    data: PokemonData,
  },
];
