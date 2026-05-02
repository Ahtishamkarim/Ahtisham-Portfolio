import Image from "next/image";

import { aboutSectionData } from "@/data/about";
import { PrimaryButton } from "@/components/ui/primary-button";

export default function About() {
  return (
    <section className="w-full bg-[#1a1a1a] py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-8">
        <div>
          <h2>
            {aboutSectionData.heading}
          </h2>

          <p className="mt-4 max-w-[520px] text-white/90">{aboutSectionData.description}</p>

          <div className="mt-8 grid grid-cols-3 gap-5">
            {aboutSectionData.stats.map((stat) => (
              <div key={stat.label}>
                <h2 className="!text-[#ccff71] !leading-[60px]" >
                  {stat.value}
                </h2>
                <p className="!font-semibold !leading-[23px]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {aboutSectionData.contacts.map((contact) => (
              <div key={contact.label}>
                <p className="!font-semibold !leading-[23px]">{contact.label} :</p>
                <a href={contact.href} className="!text-[18px] !leading-[27px] !font-light !font-sans">
                  {contact.value}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            {aboutSectionData.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-sm font-semibold text-white hover:border-[#ccff71] hover:text-[#ccff71]"
              >
                {social.label}
              </a>
            ))}
          </div>

          <PrimaryButton href={aboutSectionData.ctaHref} className="mt-8">
            {aboutSectionData.ctaLabel}
          </PrimaryButton>
        </div>

        {/* <div className="flex justify-center md:justify-end">
          <div className="relative h-[560px] w-[380px] rotate-[6deg] overflow-hidden rounded-[26px]">
            <Image
              src={aboutSectionData.image}
              alt={aboutSectionData.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 380px"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
