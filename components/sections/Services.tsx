"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { servicesSectionData } from "@/data/services";

export default function Services() {
  const [openServiceId, setOpenServiceId] = useState<number>(0);

  const toggleService = (serviceId: number) => {
    setOpenServiceId((current) => (current === serviceId ? 0 : serviceId));
  };

  return (
    <section className="relative font-antonio w-full bg-[#1a1a1a] py-10 sm:py-20 md:py-25">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8">
        <div>
          <h2>
            {servicesSectionData.heading}
          </h2>
          <p className="mt-4 max-w-[470px]">
            {servicesSectionData.description}
          </p>

          <ul className="mt-10">
            {servicesSectionData.services.map((service) => (
              <li key={service.id} className="border-b border-white/20 py-5">
                <button
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className="flex w-full items-center justify-between gap-4 text-left text-white cursor-pointer"
                >
                  <h4>
                    {service.id}. {service.title}
                  </h4>
                  <ChevronDown
                    className="h-6 w-6 shrink-0"
                    aria-hidden
                  />
                </button>

                {openServiceId === service.id && (
                  <ul className="mt-4 space-y-3 pb-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-[30px] text-white/9"
                      >
                        <span className="text-[#ccff71] !leading-[27px] mb-2.5">◉</span>
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="relative min-h-[520px]">
          <div className="absolute right-2 top-3 h-[460px] w-[320px] rotate-[10deg] overflow-hidden rounded-[20px] md:right-8 md:w-[360px]">
            <Image
              src={servicesSectionData.primaryImage}
              alt={servicesSectionData.primaryImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 60vw, 360px"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
