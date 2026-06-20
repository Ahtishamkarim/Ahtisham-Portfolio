"use client";

import { ChevronDown } from "lucide-react";
import { FormEvent, useState } from "react";

import type { ContactSectionData } from "@/types/contact";
import { PrimaryButton } from "@/components/ui/primary-button";

type ContactFormProps = {
  services: ContactSectionData["services"];
  formCopy: ContactSectionData["form"];
};

const inputClassName =
  "w-full rounded-full border border-transparent bg-[#2a2a2a] px-5 py-3.5 font-sans text-[15px] text-white outline-none transition placeholder:text-white/35 focus:border-[#ccff71]/40";

export function ContactForm({ services, formCopy }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [service, setService] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("success");
    event.currentTarget.reset();
    setService("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block font-sans text-sm font-light text-[#ccff71]"
          >
            {formCopy.nameLabel}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={formCopy.namePlaceholder}
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block font-sans text-sm font-light text-[#ccff71]"
          >
            {formCopy.emailLabel}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={formCopy.emailPlaceholder}
            className={inputClassName}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-service"
          className="mb-2 block font-sans text-sm font-light text-[#ccff71]"
        >
          {formCopy.serviceLabel}
        </label>
        <div className="relative">
          <select
            id="contact-service"
            name="service"
            required
            value={service}
            onChange={(event) => setService(event.target.value)}
            className={`${inputClassName} appearance-none pr-12 ${
              service === "" ? "text-white/35" : "text-white"
            }`}
          >
            <option value="" disabled hidden>
              {formCopy.servicePlaceholder}
            </option>
            {services.map((serviceOption) => (
              <option
                key={serviceOption.value}
                value={serviceOption.value}
                className="text-white"
              >
                {serviceOption.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50"
            aria-hidden
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block font-sans text-sm font-light text-[#ccff71]"
        >
          {formCopy.messageLabel}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder={formCopy.messagePlaceholder}
          className="w-full resize-none rounded-3xl border border-transparent bg-[#2a2a2a] px-5 py-4 font-sans text-[15px] text-white outline-none transition placeholder:text-white/35 focus:border-[#ccff71]/40"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <PrimaryButton type="submit">{formCopy.submitLabel}</PrimaryButton>

        {status === "success" && (
          <p className="font-sans text-sm text-[#ccff71]">
            Thanks! Your message has been sent.
          </p>
        )}
      </div>
    </form>
  );
}
