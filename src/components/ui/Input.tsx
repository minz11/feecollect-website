import { cn } from "../../lib/utils";

/**
 * Input — reusable presentational form input.
 * All styles originate from design tokens in tailwind.config.js.
 * No RHF/Zod dependency — used for simple native forms.
 * Animation: CSS transitions only (focus, error, hover).
 */
type InputProps = {
  id?: string;
  name?: string;
  type?: "text" | "email" | "tel" | "password" | "textarea";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  /** allow kebab-cased aria-describedby from FormField clone */
  "aria-describedby"?: string;
  className?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export function Input({
  id,
  name,
  type = "text",
  placeholder,
  value,
  defaultValue,
  disabled = false,
  required = false,
  error,
  ariaLabel,
  ariaDescribedBy,
  className,
  rows = 4,
  onChange,
  onBlur,
  ...rest
}: InputProps & Record<string, unknown>) {
  const isControlled = value !== undefined;
  const externalDescribedBy = (rest["aria-describedby"] as string | undefined) ?? ariaDescribedBy;
  const describedBy = [externalDescribedBy, error ? `${id}-error` : undefined].filter(Boolean).join(" ") || undefined;

  const classes = cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-brand-neutral-900 placeholder:text-brand-neutral-500 transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:cursor-not-allowed",
    error
      ? "border-danger focus-visible:border-danger focus-visible:ring-danger/20"
      : "border-brand-neutral-200 focus-visible:border-brand-blue focus-visible:ring-brand-blue/20",
    className
  );

  if (type === "textarea") {
    return (
      <>
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          required={required}
          aria-label={ariaLabel}
          aria-describedby={describedBy}
          aria-invalid={!!error}
          className={cn(classes, "min-h-[96px] resize-y")}
          onChange={onChange}
          onBlur={onBlur}
          {...(isControlled ? { value } : { defaultValue })}
        />
        {error && (
          <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-danger">
            {error}
          </p>
        )}
      </>
    );
  }

  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-label={ariaLabel}
        aria-describedby={describedBy}
        aria-invalid={!!error}
        className={classes}
        onChange={onChange}
        onBlur={onBlur}
        {...(isControlled ? { value } : { defaultValue })}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </>
  );
}
