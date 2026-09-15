import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { FormField } from "../ui/FormField";
import { Card } from "../ui/Card";
import { contactFormSchema, type ContactFormValues } from "../../lib/validations";
import { submitDemoRequest } from "../../lib/crm";
import { track } from "../../lib/analytics";

const INSTITUTION_TYPE_OPTIONS = [
  { value: "school", label: "School" },
  { value: "college", label: "College" },
  { value: "university", label: "University" },
  { value: "multi-campus", label: "Multi-Campus Group" },
  { value: "other", label: "Other" },
];

const ROLE_OPTIONS = [
  { value: "owner-trust", label: "Owner / Trust Management" },
  { value: "principal-director", label: "Principal / Director" },
  { value: "administrator", label: "Administrator / Coordinator" },
  { value: "finance-hr", label: "Finance / HR Team" },
  { value: "other", label: "Other" },
];

const SIZE_OPTIONS = [
  { value: "lt1k", label: "< 1,000 students" },
  { value: "1k-5k", label: "1,000 – 5,000" },
  { value: "5k-20k", label: "5,000 – 20,000" },
  { value: "20k+", label: "20,000+" },
];

const CAMPUSES_OPTIONS = [
  { value: "1", label: "1 campus" },
  { value: "2-5", label: "2 – 5 campuses" },
  { value: "6-20", label: "6 – 20" },
  { value: "20plus", label: "20+" },
];

const HEAR_ABOUT_OPTIONS = [
  { value: "google", label: "Google / Search" },
  { value: "referral", label: "Referral" },
  { value: "social", label: "Social media" },
  { value: "event", label: "Event / Exhibition" },
  { value: "other", label: "Other" },
];

const MODULE_OPTIONS = [
  "Admissions",
  "Academics",
  "Finance",
  "Examinations",
  "Transport & Hostel",
  "HR & Payroll",
  "Library",
  "Communication",
];

export const Contact = () => {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      modules: [],
      consent: undefined as unknown as true,
    },
  });

  const modulesVal = watch("modules") ?? [];

  const onSubmit = async (data: ContactFormValues) => {
    setServerError(null);
    setSubmitState("idle");
    const res = await submitDemoRequest(data);
    if (res.ok) {
      setSubmitState("success");
      track("demo_requested", { institutionType: data.institutionType, role: data.role });
      reset();
    } else {
      setSubmitState("error");
      setServerError(res.error ?? "Something went wrong. Please try again or email sales@feecollect.io");
    }
  };

  if (submitState === "success") {
    return (
      <section className="py-section-md">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Book a personalized demo"
            title="Request received — thank you."
            description="Our team will contact you within one business day to schedule your personalized walkthrough."
          />
          <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-success/20 bg-success-light p-6 text-center">
            <p className="text-sm font-semibold text-success">Demo request submitted</p>
            <p className="mt-2 text-sm text-brand-neutral-600">
              Check your email for confirmation. Need urgent help? Write to{" "}
              <a href="mailto:sales@feecollect.io" className="font-semibold underline">
                sales@feecollect.io
              </a>
            </p>
            <Button variant="secondary" className="mt-4" onClick={() => setSubmitState("idle")}>
              Send another request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-section-md">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Book a personalized demo"
          title="See FeeCollect in action."
          description="Tell us about your institution. We'll tailor the demo to your workflows — no obligation, implementation guidance included."
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Channels */}
          <div className="lg:col-span-4 space-y-3">
            {[
              { title: "Direct Email", lines: ["support@feecollect.io", "sales@feecollect.io"] },
              { title: "Phone & WhatsApp", lines: ["Mon–Sat, 9am–9pm IST", "Response within 24h"] },
              { title: "Office Location", lines: ["FeeCollect HQ", "Bengaluru, India"] },
            ].map((ch) => (
              <Card variant="muted" key={ch.title} className="p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500">{ch.title}</p>
                {ch.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm font-medium text-brand-neutral-900">
                    {line}
                  </p>
                ))}
              </Card>
            ))}
            <Card variant="highlighted" className="p-3">
              <p className="text-xs font-semibold text-brand-neutral-900">What happens next?</p>
              <p className="mt-1 text-xs leading-relaxed text-brand-neutral-600">
                Discovery → tailored demo → implementation plan. No sales pressure.
              </p>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-2xl border border-brand-neutral-200 bg-white p-5 md:p-6 shadow-sm space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormField id="name" label="Full name" required error={errors.name?.message}>
                  <Input id="name" placeholder="e.g. Priya Sharma" error={errors.name?.message} {...register("name")} />
                </FormField>
                <FormField id="institution" label="Institution name" required error={errors.institution?.message}>
                  <Input id="institution" placeholder="e.g. Delhi Public School" error={errors.institution?.message} {...register("institution")} />
                </FormField>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormField id="email" label="Work email" required error={errors.email?.message}>
                  <Input id="email" type="email" placeholder="you@school.edu.in" error={errors.email?.message} {...register("email")} />
                </FormField>
                <FormField id="phone" label="Phone / WhatsApp" required error={errors.phone?.message} hint="Include country code">
                  <Input id="phone" type="tel" placeholder="+91 98xxxxxxxx" error={errors.phone?.message} {...register("phone")} />
                </FormField>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormField id="institutionType" label="Institution type" required error={errors.institutionType?.message}>
                  <Select
                    id="institutionType"
                    placeholder="Select type"
                    options={INSTITUTION_TYPE_OPTIONS}
                    error={errors.institutionType?.message}
                    {...register("institutionType")}
                  />
                </FormField>
                <FormField id="role" label="Your role" required error={errors.role?.message}>
                  <Select
                    id="role"
                    placeholder="Select role"
                    options={ROLE_OPTIONS}
                    error={errors.role?.message}
                    {...register("role")}
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormField id="size" label="Institution size" error={errors.size?.message}>
                  <Select id="size" placeholder="Select size" options={SIZE_OPTIONS} error={errors.size?.message} {...register("size")} />
                </FormField>
                <FormField id="campuses" label="Campuses" error={errors.campuses?.message}>
                  <Select id="campuses" placeholder="Select campuses" options={CAMPUSES_OPTIONS} error={errors.campuses?.message} {...register("campuses")} />
                </FormField>
              </div>

              <div>
                <p className="block text-sm font-semibold text-brand-neutral-700">Modules of interest <span className="font-normal text-brand-neutral-500">(optional)</span></p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {MODULE_OPTIONS.map((m) => {
                    const active = modulesVal.includes(m);
                    return (
                      <button
                        key={m}
                        type="button"
                        aria-pressed={active}
                        onClick={() => {
                          const next = active ? modulesVal.filter((x: string) => x !== m) : [...modulesVal, m];
                          setValue("modules", next, { shouldDirty: true });
                        }}
                        className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow ${
                          active ? "bg-brand-neutral-900 text-white border-brand-neutral-900" : "bg-white border-brand-neutral-200 text-brand-neutral-700 hover:bg-brand-neutral-50"
                        }`}
                      >
                        {m}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormField id="preferredDate" label="Preferred demo date" hint="Optional — we'll confirm a slot">
                  <Input id="preferredDate" type="text" placeholder="e.g. Next week, Mon 3pm IST" {...register("preferredDate")} />
                </FormField>
                <FormField id="hearAbout" label="How did you hear about us?">
                  <Select id="hearAbout" placeholder="Select" options={HEAR_ABOUT_OPTIONS} {...register("hearAbout")} />
                </FormField>
              </div>

              <FormField id="message" label="Tell us about your needs" hint="Optional — current system, migration, campuses">
                <Input id="message" type="textarea" rows={3} placeholder="e.g. Migrating from legacy ERP, 3 campuses, 2,000 students…" {...register("message")} />
              </FormField>

              <label className="flex items-start gap-2.5 text-xs leading-relaxed text-brand-neutral-600">
                <input type="checkbox" {...register("consent")} className="mt-0.5 h-4 w-4 rounded border-brand-neutral-300 text-brand-neutral-900 focus:ring-brand-yellow" />
                <span>
                  I agree to the <a href="/privacy" className="font-semibold underline">Privacy Policy</a> and consent to being contacted about FeeCollect. <span className="text-danger">*</span>
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs font-medium text-danger" role="alert">
                  {errors.consent.message}
                </p>
              )}

              {serverError && (
                <p className="rounded-xl border border-danger/20 bg-danger-light px-4 py-3 text-sm font-medium text-danger" role="alert">
                  {serverError}
                </p>
              )}

              <Button type="submit" variant="primary" size="lg" fullWidth loading={isSubmitting} className="rounded-xl">
                {isSubmitting ? "Sending…" : "Book a Personalized Demo"}
              </Button>
              <p className="text-center text-xs text-brand-neutral-500">No obligation • Personalized session • Implementation discussion included • Response within 24h</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};