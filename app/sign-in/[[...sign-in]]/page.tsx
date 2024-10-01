import BgGradient from "@/components/common/bg-gradient";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center py-20">
      <BgGradient>
        <SignIn />
      </BgGradient>
    </section>
  );
}
