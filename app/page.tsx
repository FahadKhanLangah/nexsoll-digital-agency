import Hero from "@/components/common/Hero";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="flex mt-16 gap-5 sm:mt-20 flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Card />
      {/* <Services /> */}
    </div>
  );
}
