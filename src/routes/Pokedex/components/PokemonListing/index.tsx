import { Component } from "solid-js";
import { For } from "solid-js";

import { PokemonCard } from "../../../../components/PokemonCard";
import { Pokemon } from "../../../../models/Pokemon";

interface PokemonListingProps {
  pokemon: Pokemon;
}

export const PokemonListing: Component<PokemonListingProps> = (props) => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <For each={props.pokemon.results}>
        {(poke) => (
          <PokemonCard
            frontSprite={poke.sprites.front_default}
            backSprite={poke.sprites.back_default}
            name={poke.name}
            hp={poke.stats[0].base_stat}
          />
        )}
      </For>
    </div>
  );
};
