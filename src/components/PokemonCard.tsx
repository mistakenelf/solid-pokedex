import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";

interface PokemonCardProps {
  frontSprite: string;
  backSprite: string;
  name: string;
  hp: number;
}

export const PokemonCard: Component<PokemonCardProps> = (props) => {
  const [currentSprite, setCurrentSprite] = createSignal("");

  createEffect(() => {
    setCurrentSprite(props.frontSprite);
  });

  const toggleSprite = () => {
    if (currentSprite() === props.frontSprite) {
      setCurrentSprite(props.backSprite);
    } else {
      setCurrentSprite(props.frontSprite);
    }
  };

  return (
    <button
      onClick={toggleSprite}
      type="button"
      class="bg-pokemon-yellow rounded-lg shadow p-4 flex justify-center flex-col"
    >
      <div class="flex items-center justify-between">
        <div class="capitalize">{props.name}</div>
        <div>{props.hp} HP</div>
      </div>
      <img src={currentSprite()} alt={props.name} />
    </button>
  );
};
