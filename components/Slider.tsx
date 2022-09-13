import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Slider(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <input
        {...props}
        disabled={!IS_BROWSER || props.disabled}
        type="range"
        min="0"
        max="100"
        value="25"
        class="range"
        step="5"
      />
      <div class="w-1/2 flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </div>
  );
}
