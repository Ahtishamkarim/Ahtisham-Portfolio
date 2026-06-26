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
        <div className="relative mx-auto w-full max-w-md md:mx-0 md:max-w-none flex justify-center md:justify-end items-center order-2 md:order-1">
          <div className="relative w-full h-[500px] md:h-[500px] md:w-[400px] overflow-hidden rounded-3xl">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
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
