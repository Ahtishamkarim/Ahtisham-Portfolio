import type { TestimonialHighlight } from "@/types/testimonials";

export type TestimonialHighlightCardProps = Omit<TestimonialHighlight, "id">;

export function TestimonialHighlightCard({
  topText,
  value,
  label,
  backgroundColor = "#ffffff",
}: TestimonialHighlightCardProps) {
  return (
    <article
      className="flex h-full flex-col justify-between rounded-3xl px-8 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.22)] md:px-5 md:py-12"
      style={{ backgroundColor }}
    >
      <h6 className="font-sans text-[14px] font-light leading-snug !text-[#2f3139]">
        {topText}
      </h6>
      <div>
        <h6 className="mt-6 font-antonio text-[60px] font-bold leading-none !text-black">
          {value}
        </h6>

        <h6 className="mt-2 font-sans text-[14px] font-light !text-[#2f3139]">
          {label}
        </h6>
      </div>
    </article>
  );
}
