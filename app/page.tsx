import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import { HeroImageBox } from "@/components/ui/hero-image-box";
import { heroData } from "@/data/hero";
import landingPageBg from "@/assets/bg1.png";

export default function Home() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${landingPageBg.src})` }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[#0a0a0a]/45"
      />

    <main className="relative w-full max-w-full overflow-x-clip">
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
        stopAtId="about-section"
        stopAnchor="center"
        stopOffset={-40}
      />

      <section id="home" className="relative h-screen w-full overflow-hidden -mt-20">
        <Hero />
      </section>

      {/* <section className="relative min-h-screen"> */}
        <Services />
      {/* </section> */}

      {/* <section className="relative min-h-screen"> */}
        <About />
      {/* </section> */}

      <FeaturedProjects />

      <Testimonials />

      <FAQ />

      <Contact />

    </main>

    <Footer />
    </>
  );
}