import type { FaqSectionData } from "@/types/faq";

export const faqSectionData: FaqSectionData = {
  heading: "FREQUENTLY ASKED QUESTIONS",
  description:
    "Here are answers to some of the most common questions I receive as a software engineer. If you don't see your question here, feel free to reach out — I'm happy to help!",
  items: [
    {
      id: 1,
      question: "WHAT SERVICES DO YOU OFFER?",
      answer:
        "I offer frontend development, backend development, and full-stack solutions — including UI implementation, API development, database design, performance optimization, and deployment support.",
    },
    {
      id: 2,
      question: "HOW DOES THE DEVELOPMENT PROCESS WORK?",
      answer:
        "We start with a discovery call, define scope and milestones, then move through design handoff, development sprints, reviews, testing, and launch. You get regular updates at every stage.",
    },
    {
      id: 3,
      question: "HOW LONG DOES A PROJECT USUALLY TAKE?",
      answer:
        "Timelines depend on scope. A landing page may take 1–2 weeks, while a full web application can take 4–12+ weeks. I share a clear timeline before work begins.",
    },
    {
      id: 4,
      question: "WHAT DO I NEED TO PROVIDE BEFORE STARTING A PROJECT?",
      answer:
        "Helpful starting materials include your goals, brand assets, content, references, and any existing designs or wireframes. If you don't have everything ready, I can guide you through what's needed.",
    },
    {
      id: 5,
      question: "DO YOU OFFER REVISIONS?",
      answer:
        "Yes. Each project includes a defined number of revision rounds within the agreed scope. Additional changes outside scope can be handled as separate tasks or milestones.",
    },
    {
      id: 6,
      question: "HOW DO I GET STARTED?",
      answer:
        "Send me a message with your project idea, timeline, and budget range. I'll review the details and schedule a quick call to discuss the best next steps.",
    },
  ],
};
