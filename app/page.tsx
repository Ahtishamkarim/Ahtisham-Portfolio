import { Navbar } from "@/components/layout/navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="w-full">
      <div className="pointer-events-none sticky inset-x-0 top-0 z-50">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>

      <section className="relative h-screen w-full overflow-hidden -mt-20">
        <Hero />
      </section>
      <Services />
      <About />
    </main>
  );
}
