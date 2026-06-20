import type { Testimonial } from "@/types/testimonials";

export type TestimonialCardProps = Pick<
  Testimonial,
  "quote" | "name" | "role" | "company"
>;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#1f1f1f] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.28)] transition-colors duration-300 hover:border-[#ccff71]/35 md:p-5">
      <span
        className="font-antonio h-10 w-10 text-[56px] leading-none text-[#ccff71]/80"
        aria-hidden
      >
        &ldquo;
      </span>

      <blockquote className="flex-1">
        <p className="font-sans text-[17px] leading-relaxed text-white/85 md:text-[18px]">
          {quote}
        </p>
      </blockquote>

      <footer className="mt-3 flex items-center gap-4 border-t border-white/10 pt-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ccff71]/40 bg-[#ccff71]/10 font-antonio text-lg text-[#ccff71]"
          aria-hidden
        >
          {getInitials(name)}
        </div>

        <div className="min-w-0">
          <cite className="not-italic">
            <p className="font-antonio text-[22px] leading-tight text-white">
              {name}
            </p>
          </cite>
          <p className="mt-1 font-sans text-sm text-white/65">
            {role}, {company}
          </p>
        </div>
      </footer>
    </article>
  );
}
