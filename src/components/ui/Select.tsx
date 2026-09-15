import { cn } from "../../lib/utils";

type SelectOption = { value: string; label: string };

type SelectProps = {
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  placeholder?: string;
  options: SelectOption[];
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  "aria-describedby"?: string;
  ariaLabel?: string;
};

export function Select({
  id,
  name,
  value,
  defaultValue,
  disabled,
  required,
  error,
  placeholder,
  options,
  className,
  onChange,
  onBlur,
  "aria-describedby": ariaDescribedBy,
  ariaLabel,
}: SelectProps) {
  const describedBy = [ariaDescribedBy, error ? `${id}-error` : undefined].filter(Boolean).join(" ") || undefined;
  return (
    <>
      <select
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        aria-label={ariaLabel}
        aria-describedby={describedBy}
        aria-invalid={!!error}
        onChange={onChange}
        onBlur={onBlur}
        className={cn(
          "w-full rounded-xl border bg-white px-4 py-3 text-sm text-brand-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50",
          error
            ? "border-danger focus-visible:border-danger focus-visible:ring-danger/20"
            : "border-brand-neutral-200 focus-visible:border-brand-blue focus-visible:ring-brand-blue/20",
          className
        )}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </>
  );
}
