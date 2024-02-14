import Image from "next/image";
import HelloOutput from "./components/HelloOutput";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <HelloOutput />
      </div>
    </main>
  );
}
