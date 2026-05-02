import { heroData } from "@/data/hero";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Hero() {
    return (
        <section className="font-antonio h-screen w-full bg-gray-800 pt-24 flex flex-col">
            <div className="mx-auto grid h-full max-w-7xl grid-cols-1 content-center md:grid-cols-3">
                <div className="flex flex-col justify-center">
                    <h4>{heroData.name}</h4>
                    <h1>{heroData.titleLeft}</h1>
                </div>
                <div className="flex justify-center">
                    <div className="relative h-[476px] w-[340px] overflow-hidden rounded-2xl self-center">
                        <Image
                            src={heroData.image}
                            alt={heroData.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 720px) 100vw, 33vw"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="mt-28.5">{heroData.titleRight}</h1>
                    <p className="text-end mt-4">{heroData.description}</p>
                </div>
            </div>
            <div className="flex justify-center my-7">
                <ThemeToggle />

            </div>
        </section>
    );
}