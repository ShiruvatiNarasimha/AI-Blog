import Banner from "@/components/home/banner";
import Howitworks from "@/components/home/howitworks";
import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7e_1px,
      transparent_1px)] 
  [background-size:16px_16px]"
    >
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute
      inset-x-0 -top-40 -z-10 transform-gpu
      overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
            className="relative left-[calc(50%-11rem)] 
        aspect-[1155/678] w-[36125rem] -translate-x-1/2 rotate-[30deg]
        bg-gradient-to-br
        from-indigo-500 via-purple-500 to-pink-500
        opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          ></div>
        </div>
      </div>
      <Banner />
      <div className="flex items-center justify-center">
        <Dot className="text-purple-400"></Dot>
        <Dot className="text-purple-400"></Dot>
        <Dot className="text-purple-400"></Dot>
      </div>
      <Howitworks />
      <div className="flex items-center justify-center">
        <Dot className="text-purple-400"></Dot>
        <Dot className="text-purple-400"></Dot>
        <Dot className="text-purple-400"></Dot>
      </div>
    </main>
  );
}
