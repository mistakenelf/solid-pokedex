import type { Component } from "solid-js";
import { useRouteData } from "solid-app-router";
import { Show, createEffect, createSignal } from "solid-js";

import { Pokemon } from "../../models/Pokemon";
import { Button } from "../../components/Button";
import { Spinner } from "../../components/Spinner";
import pokemonApi from "../../lib/pokemonApi";
import { NoResults } from "../../components/NoResults";

import { PokemonListing } from "./components/PokemonListing";

const Pokedex: Component = () => {
  const pokemon = useRouteData<() => Pokemon>();
  const [pokemonData, setPokemonData] = createSignal<Pokemon>();
  const [loadingMore, setLoadingMore] = createSignal(false);

  createEffect(() => {
    if (pokemon()) {
      setPokemonData(pokemon());
    }
  });

  const loadMore = async () => {
    setLoadingMore(true);

    try {
      const newPokemon = await pokemonApi.getPokemon(pokemonData().next);
      setPokemonData((oldPokemon) => ({
        ...newPokemon,
        results: [...oldPokemon.results, ...newPokemon.results],
      }));
      setLoadingMore(false);
    } catch (e) {
      setLoadingMore(false);
      console.error(e);
    }
  };

  return (
    <div class="p-6 flex flex-col">
      <Show when={pokemonData()} fallback={<Spinner isOverlay />}>
        <Show when={pokemonData().results.length > 0} fallback={<NoResults />}>
          <PokemonListing pokemon={pokemonData()} />
          <div class="pt-6 flex flex-col self-center">
            <div class="mb-4">
              Currently displaying {pokemonData().results.length} of{" "}
              {pokemonData().count}
            </div>
            <Button onClick={loadMore} loading={loadingMore()}>
              Load More
            </Button>
          </div>
        </Show>
      </Show>
    </div>
  );
};

export default Pokedex;
