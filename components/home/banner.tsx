import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section
      className="lg:max-w-6xl mx-auto
    flex flex-col z-0 items-center
    justify-center py-28 sm:pt-32
    transition-all animate-in"
    >
      <h1 className="py-8 text-center text-4xl sm:text-5xl font-bold text-gray-900">
        From Ordinary Words to{" "}
        <span className="relative">
          <span className="text-purple-600">Extraordinary</span>
          <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-400 opacity-70 rounded-md transform transition-all duration-300 ease-in-out hover:h-2 hover:opacity-100"></span>
        </span>{" "}
        Blogs
      </h1>

      <h2
        className="text-center px-4
      lg:px-0 lg:max-w-4xl"
      >
        Convert your video or voice into Blog Post in seconds with the power of
        AI!
      </h2>
      <Button
        variant={"link"}
        className="mt-6 text-xl
        rounded-full px-12 py-8 lg:mt-20 
        bg-gradient-to-r from-purple-600
       to-indigo-600 hover:from-indigo-600
       hover:to-purple-600 text-white
      font-bold shadow-lg
      hover:no-underline"
      >
        <Link href="/#pricing" className="flex gap-2 items-center">
          <span className="relative">Get SpeakEasy</span>
          <ArrowRight className="animate-pulse" />
        </Link>
      </Button>
    </section>
  );
};

export default Banner;
