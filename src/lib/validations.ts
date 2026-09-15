/**
 * Zod validation schemas for FeeCollect forms.
 * Used with React Hook Form via resolver: zodResolver(zod schemas).
 *
 * All schemas are enterprise-grade: required fields, enterprise tone,
 * no buzzwords, outcome-driven copy, and WCAG-compliant labels.
 */

import { z } from "zod";

/** Contact / Demo Request form — Book a Demo (enterprise) */
export const contactFormSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be less than 100 characters")
      .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Name must contain only letters, spaces, hyphens, and apostrophes")
      .trim(),
    institution: z
      .string()
      .min(2, "Institution name must be at least 2 characters")
      .max(200, "Institution name must be less than 200 characters")
      .trim(),
    email: z
      .string()
      .email("Please enter a valid work email address")
      .max(100, "Email must be less than 100 characters")
      .trim(),
    phone: z
      .string()
      .trim()
      .min(8, "Phone is required — include country code e.g. +91")
      .refine((val) => /^[\+]?[\d\s\-\(\)]{8,}$/.test(val), "Phone must be at least 8 digits with optional country code"),
    institutionType: z.enum(["school", "college", "university", "multi-campus", "other"], {
      errorMap: () => ({ message: "Please select institution type" }),
    }),
    role: z.enum(["owner-trust", "principal-director", "administrator", "finance-hr", "other"], {
      errorMap: () => ({ message: "Please select your role" }),
    }),
    size: z
      .string()
      .optional()
      .refine((val) => !val || /^(lt1k|1k-5k|5k-20k|20k+)$/.test(val), "Please select a valid institution size"),
    campuses: z
      .string()
      .optional()
      .refine((val) => !val || /^(1|2-5|6-20|20plus)$/.test(val), "Please select campuses"),
    modules: z.array(z.string()).optional(),
    preferredDate: z.string().optional(),
    hearAbout: z.string().optional(),
    message: z.string().max(2000, "Message must be less than 2000 characters").optional(),
    consent: z.literal(true, {
      errorMap: () => ({ message: "Please accept the privacy policy to continue" }),
    }),
  })
  .strict();

/** Type for form values */
export type ContactFormValues = z.infer<typeof contactFormSchema>;