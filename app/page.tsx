import { Navbar } from "@/components/layout/navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import { HeroImageBox } from "@/components/ui/hero-image-box";
import { heroData } from "@/data/hero";

export default function Home() {
  return (
    <main className="w-full">
      <div className="pointer-events-none sticky inset-x-0 top-0 z-50">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>

      <HeroImageBox
        src={heroData.image}
        alt={heroData.imageAlt}
        backSrc={heroData.backImage}
        backAlt={heroData.backImageAlt}
      />

      <section className="relative h-screen w-full overflow-hidden -mt-20">
        <Hero />
      </section>

      {/* <section className="relative min-h-screen"> */}
        <Services />
      {/* </section> */}

      {/* <section className="relative min-h-screen"> */}
        <About />
      {/* </section> */}
    </main>
  );
}