import BgGradient from "@/components/common/bg-gradient";
import Banner from "@/components/home/banner";
import Howitworks from "@/components/home/howitworks";
import Pricing from "@/components/home/pricing";
import { Dot } from "lucide-react";

export default function Home() {
  return (
    <main
      className="mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7e_1px,
      transparent_1px)] 
  [background-size:16px_16px]"
    >
      <BgGradient />
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
      <Pricing />
      <div className="flex items-center justify-center">
        <Dot className="text-purple-400"></Dot>
        <Dot className="text-purple-400"></Dot>
        <Dot className="text-purple-400"></Dot>
      </div>

      <footer className="bg-gray-200/20 flex h-20 py-24 px-12 z-20 relative overflow-hidden flex-col gap-2">
        <p>All Rights Reserved, {new Date().getFullYear()}</p>
        <a href="https://x.com/Narasimha058" target="_blank">
          Built by Shiruvati Narasimha 🚀
        </a>
      </footer>
    </main>
  );
}
