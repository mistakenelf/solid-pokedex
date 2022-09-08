import type { Component } from "solid-js";
import { Show, createSignal, createResource } from "solid-js";

import { Button } from "../../components/Button";
import { Spinner } from "../../components/Spinner";
import pokemonApi from "../../lib/pokemonApi";
import { NoResults } from "../../components/NoResults";

import { PokemonListing } from "./components/PokemonListing";

export const Pokedex: Component = () => {
  const [pokemon, { mutate }] = createResource(() => pokemonApi.getPokemon());
  const [loadingMore, setLoadingMore] = createSignal(false);

  const loadMore = async () => {
    setLoadingMore(true);

    try {
      const newPokemon = await pokemonApi.getPokemon(pokemon().next);
      mutate({
        ...newPokemon,
        results: [...pokemon().results, ...newPokemon.results],
      });
      setLoadingMore(false);
    } catch (e) {
      setLoadingMore(false);
      console.error(e);
    }
  };

  return (
    <div class="p-6 flex flex-col">
      <Show when={!pokemon.loading} fallback={<Spinner isOverlay />}>
        <Show when={pokemon().results.length > 0} fallback={<NoResults />}>
          <PokemonListing pokemon={pokemon()} />
          <div class="pt-6 flex flex-col self-center">
            <div class="mb-4">
              Currently displaying {pokemon().results.length} of{" "}
              {pokemon().count}
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
