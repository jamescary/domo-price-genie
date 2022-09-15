import { useState } from "preact/hooks";
import { JSX } from "https://esm.sh/v94/preact@10.10.6/jsx-runtime/src/index.d.ts";
import { Button } from "../components/Button.tsx";
import { Slider } from "../components/Slider.tsx";
import { render } from "https://esm.sh/v94/preact@10.10.6/src/index.d.ts";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const css = `
      .dropdown:hover .dropdown-menu {
        display: block;
      }
      .dropdown:active .dropdown-menu {
        display: block;
      }
    `;
  const [count, setCount] = useState(props.start);
  const [users, setUsers] = useState(25);
  const [connectors, setConnectors] = useState(10);
  const [freq, setFreq] = useState(365);
  const cost = ((count * 12) + (freq * connectors * 1.5)) * 1.2;
  const credits = ((count * 12) + (freq * connectors * 1.5));

  return (
    <div class="gap-2 w-full">
      <style>{css}</style>
      <p class="font-bold text-xl pb-2">
        Overall Cost: ${cost.toLocaleString("en-US")} per Year
      </p>
      {/* <p class="font-bold text-xl pb-2">Execution credits: {credits.toLocaleString('en-US')} per Year</p> */}
      <p class="font-bold text-xl">Rows: {count} Million</p>
      <Button onClick={() => setCount(count - 5)}>-5</Button>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
      <Button onClick={() => setCount(count + 5)}>+5</Button>

      <p class="font-bold text-xl">Users: {users}</p>
      <Button onClick={() => setUsers(users - 5)}>-5</Button>
      <Button onClick={() => setUsers(users - 1)}>-1</Button>
      <Button onClick={() => setUsers(users + 1)}>+1</Button>
      <Button onClick={() => setUsers(users + 5)}>+5</Button>

      <p class="font-bold text-xl">Data Sources: {connectors}</p>
      <Button onClick={() => setConnectors(connectors - 5)}>-5</Button>
      <Button onClick={() => setConnectors(connectors - 1)}>-1</Button>
      <Button onClick={() => setConnectors(connectors + 1)}>+1</Button>
      <Button onClick={() => setConnectors(connectors + 5)}>+5</Button>

      <p class="font-bold text-xl">Reporting Frequency: {freq}</p>
      <Button onClick={() => setFreq(35040)}>Every 15 Minutes</Button>
      <Button onClick={() => setFreq(8760)}>Hourly</Button>
      <Button onClick={() => setFreq(2920)}>Hourly 9-5</Button>
      <Button onClick={() => setFreq(730)}>Twice Daily</Button>
      <Button onClick={() => setFreq(365)}>Daily</Button>
      <Button onClick={() => setFreq(52)}>Weekly</Button>
    </div>
  );
}
