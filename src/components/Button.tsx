import type { ParentComponent, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button: ParentComponent<ButtonProps> = (props) => {
  const [local, other] = splitProps(props, ["loading"]);

  return (
    <button
      {...other}
      class="bg-pokemon-red hover:opacity-90 text-white px-4 py-2 rounded border-4 border-black"
    >
      <Show when={!local.loading} fallback={<div>Loading...</div>}>
        {other.children}
      </Show>
    </button>
  );
};
