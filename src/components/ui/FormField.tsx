import * as React from "react";
import { cn } from "../../lib/utils";

type FormFieldProps = {
  id?: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactElement<{ id?: string; "aria-describedby"?: string }>;
};

/**
 * FormField — presentational wrapper: Label + control + hint/error.
 * No RHF/Zod dependency; parent owns registration and validation state.
 *
 * Usage with RHF:
 *   const { register, formState: { errors } } = useForm<ContactFormValues>({
 *     resolver: zodResolver(contactFormSchema),
 *   });
 *   <FormField label="Full Name" error={errors.name?.message} id="name">
 *     <Input id="name" {...register("name")} error={errors.name?.message} />
 *   </FormField>
 */
export function FormField({ id, label, hint, error, required, className, children }: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  const childWithProps = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
        id,
        "aria-describedby": describedBy,
      } as Record<string, unknown>)
    : children;

  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={id} className="block text-sm font-semibold text-brand-neutral-700">
        {label}
        {required && <span className="ml-1 text-danger" aria-hidden="true">*</span>}
      </label>
      {childWithProps}
      {hint && !error && (
        <p id={hintId} className="text-xs text-brand-neutral-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-xs font-medium text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
