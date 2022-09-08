import type { RouteDefinition } from "solid-app-router";

import { Pokedex } from "./Pokedex";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Pokedex,
  },
];
