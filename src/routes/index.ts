import type { RouteDefinition } from "solid-app-router";
import { lazy } from "solid-js";

import { PokemonData } from "./Pokedex/index.data";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./Pokedex")),
    data: PokemonData,
  },
];
