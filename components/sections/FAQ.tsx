"use client";

import { useState } from "react";
import { FaqItem } from "@/components/ui/faq-item";
import { faqSectionData } from "@/data/faq";

export default function FAQ() {
  const [openFaqId, setOpenFaqId] = useState(0);

  const toggleFaq = (faqId: number) => {
    setOpenFaqId((current) => (current === faqId ? 0 : faqId));
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#1a1a1a] py-16 font-antonio sm:py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,113,0.04),transparent_55%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-start md:gap-14 md:px-8 lg:gap-20">
        <div className="md:sticky md:top-28">
          <h2>{faqSectionData.heading}</h2>

          <p className="mt-4 max-w-[470px] text-white/90">
            {faqSectionData.description}
          </p>
        </div>

        <ul>
          {faqSectionData.items.map((item) => (
            <FaqItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openFaqId === item.id}
              onToggle={toggleFaq}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
