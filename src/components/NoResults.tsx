import type { Component } from "solid-js";

export const NoResults: Component = () => {
  return (
    <div class="h-full w-full flex items-center justify-center px-4">
      <div class="text-pokemon-yellow text-2xl border-4 border-pokemon-yellow p-8 text-center">
        No Pokemon found
      </div>
    </div>
  );
};
