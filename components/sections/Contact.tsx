import Image from "next/image";
import { Hand } from "lucide-react";

import { ContactForm } from "@/components/ui/contact-form";
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
        <div className="relative mx-auto w-full max-w-md md:mx-0 md:max-w-none flex justify-end items-center">
          <div className="relative h-[500px] w-[400px] overflow-hidden rounded-3xl">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* <div
            className="absolute -bottom-4 -left-2 flex h-20 w-20 items-center justify-center rounded-full bg-[#ccff71] shadow-[0_12px_40px_rgba(204,255,113,0.25)] md:-bottom-5 md:-left-4 md:h-24 md:w-24"
            aria-hidden
          >
            <Hand className="h-9 w-9 text-[#1a1a1a] md:h-10 md:w-10" strokeWidth={1.75} />
          </div> */}
        </div>

        <div>
          <h2>{heading}</h2>
          <p className="mt-4 max-w-lg text-white/90">{description}</p>

          <ContactForm services={services} formCopy={form} />
        </div>
      </div>
    </section>
  );
}
