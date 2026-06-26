import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TestimonialHighlightCard } from "@/components/ui/testimonial-highlight-card";
import { testimonialsSectionData } from "@/data/testimonials";
import type { Testimonial, TestimonialHighlight } from "@/types/testimonials";

/** 0-based grid indices where highlight cards are inserted (3rd & 4th cards). */
const HIGHLIGHT_POSITIONS = [2, 3];

type GridItem =
  | { kind: "review"; testimonial: Testimonial }
  | { kind: "highlight"; highlight: TestimonialHighlight };

function buildTestimonialGridItems(
  testimonials: Testimonial[],
  highlights: TestimonialHighlight[]
) {
  const items: GridItem[] = [];
  let reviewIndex = 0;
  let highlightIndex = 0;
  const totalItems = testimonials.length + highlights.length;

  for (let i = 0; i < totalItems; i++) {
    if (
      highlightIndex < highlights.length &&
      HIGHLIGHT_POSITIONS[highlightIndex] === i
    ) {
      items.push({ kind: "highlight", highlight: highlights[highlightIndex] });
      highlightIndex += 1;
      continue;
    }

    if (reviewIndex < testimonials.length) {
      items.push({ kind: "review", testimonial: testimonials[reviewIndex] });
      reviewIndex += 1;
    }
  }

  return items;
}

export default function Testimonials() {
  const { heading, description, highlights, testimonials } =
    testimonialsSectionData;
  const gridItems = buildTestimonialGridItems(testimonials, highlights);

  return (
    <section
      id="testimonials"
      className="relative w-full  py-16 font-antonio sm:py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 " />
      {/* bg-[radial-gradient(ellipse_at_top,rgba(204,255,113,0.05),transparent_55%)] */}
      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="mx-auto">
          <h2>{heading}</h2>
          <p className="md:mt-4 mt-1 max-w-xl">{description}</p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {gridItems.map((item) => (
            <li
              key={
                item.kind === "highlight"
                  ? item.highlight.id
                  : item.testimonial.id
              }
              className="min-w-0"
            >
              {item.kind === "highlight" ? (
                <TestimonialHighlightCard
                  topText={item.highlight.topText}
                  value={item.highlight.value}
                  label={item.highlight.label}
                  backgroundColor={item.highlight.backgroundColor}
                />
              ) : (
                <TestimonialCard
                  quote={item.testimonial.quote}
                  name={item.testimonial.name}
                  role={item.testimonial.role}
                  company={item.testimonial.company}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
