"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useCursorHoverImage } from "@/components/ui/cursor-hover-image";
import { servicesSectionData } from "@/data/services";

export default function Services() {
  const [openServiceId, setOpenServiceId] = useState<number>(0);
  const { preview, containerProps, getItemProps } = useCursorHoverImage({
    width: 200,
    height: 120,
    imageTransitionDuration: 600,
  });

  const toggleService = (serviceId: number) => {
    setOpenServiceId((current) => (current === serviceId ? 0 : serviceId));
  };

  return (
    <section id="services-section" className="relative font-antonio w-full py-10 sm:py-20 md:py-25">
      {preview}

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8">
        <div>
          <h2>
            {servicesSectionData.heading}
          </h2>
          <p className="mt-4 max-w-[470px]">
            {servicesSectionData.description}
          </p>

          <ul className="mt-10" {...containerProps}>
            {servicesSectionData.services.map((service) => {
              const isOpen = openServiceId === service.id;

              return (
              <li
                key={service.id}
                className="border-b border-white/20"
                {...getItemProps(service)}
              >                <button
                  type="button"
                  onClick={() => toggleService(service.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-white"
                >
                  <h4
                    className={`transition-colors duration-300 group-hover:!text-[#ccff71] ${
                      isOpen ? "!text-[#ccff71]" : "!text-white"
                    }`}
                  >
                    {service.id}. {service.title}
                  </h4>

                  <ChevronDown
                    className={`h-6 w-6 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-2 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 text-[30px] text-white/9"
                        >
                          <span className="mb-2.5 text-[#ccff71] !leading-[27px]">◉</span>
                          <p>{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
            })}
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
