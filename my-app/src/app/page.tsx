import Image from "next/image";
import HelloOutput from "./components/HelloOutput";
import DynamicVars from "./config/DynamicVars";

const dynvars = DynamicVars();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl items-center justify-between font-mono text-sm lg:flex lg:flex-col">
        <HelloOutput /><br />
        <p>Do you like {dynvars.LIKE_INTEREST}?</p>
      </div>
    </main>
  );
}
