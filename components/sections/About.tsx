import Image from "next/image";

import { aboutSectionData } from "@/data/about";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SocialIcon } from "@/components/ui/social-icon";
import { CounterNumber } from "@/components/ui/counter-number";
export default function About() {
  return (
    <section id="about-section" className="relative w-full py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-8">
        <div>
          <h2>
            {aboutSectionData.heading}
          </h2>

          <p className="mt-4 max-w-[520px] text-white/90">{aboutSectionData.description}</p>

          <div className="mt-8 grid grid-cols-3 gap-5">
            {aboutSectionData.stats.map((stat) => (
              <div key={stat.label}>
                <CounterNumber
                  value={stat.value}
                  as="h2"
                  className="!text-[#ccff71] !leading-[60px]"
                />
                <p className="!font-semibold !leading-[23px]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {aboutSectionData.contacts.map((contact) => (
              <div key={contact.label}>
                <p className="!font-semibold !leading-[23px]">{contact.label} :</p>
                <a
                  href={contact.href}
                  className="block break-all !font-sans !text-[18px] !font-light !leading-[27px] !text-white transition-colors hover:!text-[#ccff71] visited:!text-white"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            {aboutSectionData.socials.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-[#ccff71] hover:text-[#ccff71]"
              >
                <SocialIcon icon={social.icon} className="h-5 w-5" />
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
