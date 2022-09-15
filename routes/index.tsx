import Counter from "../islands/Counter.tsx";
import LemonDrop from "../islands/LemonDrop.tsx";

function Hero() {
  return (
    <>
      <section class="w-full flex justify-center items-center flex-col bg-green-300">
        <LemonDrop />
      </section>
    </>
  );
}

export default function Home() {
  return (
    <>
    <Hero/>
      <div class="p-4 mx-auto max-w-screen-md">
        <Counter start={3} />
      </div>
    </>
  );
}
