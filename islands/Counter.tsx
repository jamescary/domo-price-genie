import { useState } from "preact/hooks";
import { JSX } from "https://esm.sh/v94/preact@10.10.6/jsx-runtime/src/index.d.ts";
import { Button } from "../components/Button.tsx";
import { Slider } from "../components/Slider.tsx";
import { render } from "https://esm.sh/v94/preact@10.10.6/src/index.d.ts";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const css = `.dropdown:hover .dropdown-menu {
      display: block;
    }`;
  const [count, setCount] = useState(props.start);
  const [users, setUsers] = useState(25);
  const [connectors, setConnectors] = useState(10);
  const [freq, setFreq] = useState(365);
  const cost = ((count * 12) + (freq * connectors * 1.5)) * 1.2;
  const credits = ((count * 12) + (freq * connectors * 1.5));

  return (
    <div class="gap-2 w-full">
      <style>{css}</style>
      <p class="font-bold text-xl pb-2">Overall Cost: ${cost.toLocaleString('en-US')} per Year</p>
      {/* <p class="font-bold text-xl pb-2">Execution credits: {credits.toLocaleString('en-US')} per Year</p> */}
      <p class="font-bold text-xl">Rows: {count} Million</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
      <p class="font-bold text-xl">Users: {users}</p>
      <div class="w-1/3">
        <Slider
          value={users}
          onInput={(e) => setUsers((e.target as HTMLInputElement).value)}
        >
        </Slider>
        <p class="font-bold text-xl">Data Sources: {connectors}</p>
        <Slider
          value={connectors}
          onInput={(e) => setConnectors((e.target as HTMLInputElement).value)}
        >
        </Slider>
      </div>

      <p class="font-bold text-xl">Reporting Frequency: {freq}</p>
      <div class="pb-10">
        <div class="dropdown inline-block relative">
          <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span class="mr-1">Reporting Frequency</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li class="">
              <a
                class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="javascript:void(0)"
                onClick={() => setFreq(35040)}
              >
                Every 15 Minutes
              </a>
            </li>
            <li class="">
              <a
                class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="javascript:void(0)"
                onClick={() => setFreq(8760)}
              >
                Hourly
              </a>
            </li>
            <li class="">
              <a
                class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="javascript:void(0)"
                onClick={() => setFreq(730)}
              >
                Twice Daily
              </a>
            </li>
            <li class="">
              <a
                class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="javascript:void(0)"
                onClick={() => setFreq(365)}
              >
                Daily
              </a>
            </li>
            <li class="">
              <a
                class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="javascript:void(0)"
                onClick={() => setFreq(52)}
              >
                Weekly
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
