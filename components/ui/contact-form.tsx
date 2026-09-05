"use client";

import { ChevronDown } from "lucide-react";
import { FormEvent, useState } from "react";

import type { ContactSectionData } from "@/types/contact";
import { PrimaryButton } from "@/components/ui/primary-button";

type ContactFormProps = {
  services: ContactSectionData["services"];
  formCopy: ContactSectionData["form"];
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const inputClassName =
  "w-full rounded-full border border-transparent bg-[#2a2a2a] px-5 py-3.5 font-sans text-[15px] text-white outline-none transition placeholder:text-white/35 focus:border-[#ccff71]/40 disabled:cursor-not-allowed disabled:opacity-70";

export function ContactForm({ services, formCopy }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");
  const [service, setService] = useState("");
  const isSubmitting = status === "submitting";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!ACCESS_KEY) {
      setStatus("error");
      setFeedback("The contact form is not configured yet. Please try again later.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const formData = new FormData(form);
      const name = String(formData.get("name") ?? "").trim();
      const serviceValue = String(formData.get("service") ?? "");
      const serviceLabel =
        services.find((option) => option.value === serviceValue)?.label ??
        serviceValue;

      formData.set("service", serviceLabel);
      formData.append("subject", `New portfolio inquiry from ${name}`);
      formData.append("from_name", name);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      let data: { success?: boolean; message?: string };

      try {
        data = JSON.parse(text) as { success?: boolean; message?: string };
      } catch {
        setStatus("error");
        setFeedback("Something went wrong. Please try again.");
        return;
      }

      if (data.success) {
        setStatus("success");
        setFeedback("Thanks! Your message has been sent.");
        form.reset();
        setService("");
        return;
      }

      setStatus("error");
      setFeedback(data.message ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
          disabled={isSubmitting}
          placeholder={formCopy.messagePlaceholder}
          className="w-full resize-none rounded-3xl border border-transparent bg-[#2a2a2a] px-5 py-4 font-sans text-[15px] text-white outline-none transition placeholder:text-white/35 focus:border-[#ccff71]/40 disabled:cursor-not-allowed disabled:opacity-70"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <PrimaryButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "SENDING..." : formCopy.submitLabel}
        </PrimaryButton>

        {feedback ? (
          <p
            className={`font-sans text-sm ${
              status === "error" ? "text-red-400" : "text-[#ccff71]"
            }`}
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
