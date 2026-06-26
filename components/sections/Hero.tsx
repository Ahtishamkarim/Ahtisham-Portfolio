import { heroData } from "@/data/hero";
import { RippleScrollButton } from "@/components/ui/ripple-scroll-button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="font-antonio h-screen w-full pt-24 flex flex-col">
            <div className="mx-auto grid h-full max-w-7xl px-4 md:px-8 grid-cols-1 content-center lg:grid-cols-3">
                <div className="flex flex-col justify-center lg:max-w-[290px] xl:max-w-none">
                    <div className="text-center lg:text-end">
                        <h4>{heroData.name}</h4>
                    </div>
                    <div className="text-center lg:text-end">
                        <h1>{heroData.titleLeft}</h1>
                    </div>
                </div>

                <div className="flex justify-center py-3 lg:py-6 lg:hidden">
                    <div className="relative h-[350px] w-[290px] max-w-full overflow-hidden rounded-3xl">
                        <Image
                            src={heroData.image}
                            alt={heroData.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 767px) 90vw"
                            priority
                        />
                    </div>
                </div>

                {/* <HeroImageBox src={heroData.image} alt={heroData.imageAlt} /> */}
                <div></div>
                <div className="flex flex-col justify-center max-w-[290px] lg:max-w-[320px] xl:max-w-[390px]">
                    <div className="text-center lg:text-end">
                        <h1 className="lg:mt-28.5">{heroData.titleRight}</h1>
                    </div>
                    <div className="text-center lg:text-end">
                        <p className="text-center lg:text-end lg:mt-4">{heroData.description}</p>
                    </div>
                </div>
            </div>
            <div className=" justify-center my-7 hidden lg:flex">
                <RippleScrollButton />
            </div>
        </section>
    );
}