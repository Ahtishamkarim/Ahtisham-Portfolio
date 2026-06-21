import { heroData } from "@/data/hero";
import { RippleScrollButton } from "@/components/ui/ripple-scroll-button";

export default function Hero() {
    return (
        <section className="font-antonio h-screen w-full pt-24 flex flex-col">
            <div className="mx-auto grid h-full max-w-7xl grid-cols-1 content-center md:grid-cols-3">
                <div className="flex flex-col justify-center">
                    <h4>{heroData.name}</h4>
                    <h1>{heroData.titleLeft}</h1>
                </div>
                {/* <HeroImageBox src={heroData.image} alt={heroData.imageAlt} /> */}
                <div></div>
                <div className="flex flex-col justify-center">
                    <h1 className="mt-28.5">{heroData.titleRight}</h1>
                    <p className="text-end mt-4">{heroData.description}</p>
                </div>
            </div>
            <div className="flex justify-center my-7">
                <RippleScrollButton />
            </div>
        </section>
    );
}