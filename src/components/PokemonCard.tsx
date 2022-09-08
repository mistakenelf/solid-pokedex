import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";

interface PokemonCardProps {
  frontSprite: string;
  backSprite: string;
  frontShiny: string;
  backShiny: string;
  name: string;
  hp: number;
}

export const PokemonCard: Component<PokemonCardProps> = (props) => {
  const [currentSprite, setCurrentSprite] = createSignal("");
  const [showShiny, setShowShiny] = createSignal(false);
  const [isFlipped, setIsFlipped] = createSignal(false);

  createEffect(() => {
    if (isFlipped()) {
      setCurrentSprite(showShiny() ? props.backShiny : props.backSprite);
    } else {
      setCurrentSprite(showShiny() ? props.frontShiny : props.frontSprite);
    }
  });

  return (
    <div class="bg-pokemon-yellow relative rounded-lg shadow flex justify-center flex-col">
      <div class="flex items-center justify-between bg-pokemon-red rounded-t-lg border-b-2 border-black text-white px-4 py-2 overflow-x-auto">
        <div class="capitalize">{props.name}</div>
        <div class="whitespace-nowrap">{props.hp} HP</div>
      </div>
      <div class="p-4">
        <img
          src={currentSprite()}
          alt={props.name}
          width="100%"
          height="200px"
        />
      </div>
      <div class="flex justify-end space-x-4 px-2 py-1">
        <button
          class="bg-pokemon-blue text-white border-2 border-black text-xs px-2 py-1"
          onClick={() => setIsFlipped(!isFlipped())}
        >
          Flip
        </button>
        <button
          class="bg-pokemon-blue text-white border-2 border-black text-xs px-2 py-1"
          onClick={() => setShowShiny(!showShiny())}
        >
          Shiny
        </button>
      </div>
    </div>
  );
};
