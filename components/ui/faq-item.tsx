import { ChevronDown } from "lucide-react";

export type FaqItemProps = {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: number) => void;
};

export function FaqItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) {
  return (
    <li className="border-b border-white/20">
      <button
        type="button"
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
        className="group flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-white"
      >
        <h5
          className={`pr-2 transition-colors duration-300 group-hover:!text-[#ccff71] ${
            isOpen ? "!text-[#ccff71]" : "!text-white"
          }`}
        >
          {id}. {question}
        </h5>
        <ChevronDown
          className={`h-6 w-6 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl font-sans text-[17px] leading-relaxed text-white/80">
            {answer}
          </p>
        </div>
      </div>
    </li>
  );
}
