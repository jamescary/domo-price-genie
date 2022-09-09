import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Slider(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type="range"
      disabled={!IS_BROWSER || props.disabled}
      min="0"
      max="100"
      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
    />
  );
}
