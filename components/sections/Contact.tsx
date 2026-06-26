import Image from "next/image";

import { ContactForm } from "@/components/ui/contact-form";
import { HeroHandCircle } from "@/components/ui/hero-hand-circle";
import { contactSectionData } from "@/data/contact";

export default function Contact() {
  const { heading, description, image, imageAlt, services, form } =
    contactSectionData;

  return (
    <section
      id="contact"
      className="relative w-full py-16 font-antonio sm:py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center md:gap-14 md:px-8 lg:gap-20">
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center order-2 md:order-1 md:mx-0 md:max-w-none md:justify-end">
          <div className="relative h-[500px] w-full md:h-[500px] md:w-[400px]">
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            <HeroHandCircle className="absolute -bottom-12 -left-14 z-10" />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2>{heading}</h2>
          <p className="mt-4 max-w-lg text-white/90">{description}</p>

          <ContactForm services={services} formCopy={form} />
        </div>
      </div>
    </section>
  );
}
