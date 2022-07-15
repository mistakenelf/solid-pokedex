import type { Component } from "solid-js";
import { Show } from "solid-js";

interface SpinnerProps {
  isOverlay: boolean;
}

export const Spinner: Component<SpinnerProps> = (props) => {
  return (
    <Show
      when={props.isOverlay}
      fallback={
        <div class="inline-block animate-spin ease duration-300 w-5 h-5 bg-blue-600 mx-2" />
      }
    >
      <div class="flex items-center justify-center h-full w-full fixed top-0 left-0 z-10 bg-gray-700 bg-opacity-85">
        <div class="h-full w-full fixed top-0 left-0" />
        <div class="inline-block animate-spin ease duration-300 w-5 h-5 bg-blue-600 mx-2" />
      </div>
    </Show>
  );
};
