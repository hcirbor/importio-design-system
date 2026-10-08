import * as React from 'react';
import { cn } from '../lib/utils';

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  htmlFor?: string;
  description?: React.ReactNode;
  error?: React.ReactNode;
}

export function Field({ label, htmlFor, description, error, className, children, ...props }: FieldProps) {
  return (
    <div className={cn('grid min-w-0 gap-2', className)} {...props}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">{label}</label>
      {children}
      {error ? <p className="m-0 text-xs text-danger" role="alert">{error}</p> : description ? <p className="m-0 text-xs text-subtle">{description}</p> : null}
    </div>
  );
}

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => <input ref={ref} className={cn('min-h-10 w-full rounded-control border border-control bg-surface px-3 py-2 text-base text-foreground placeholder:text-subtle disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm aria-invalid:border-danger', className)} {...props} />,
);
Input.displayName = 'Input';

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => <textarea ref={ref} className={cn('min-h-32 w-full resize-y rounded-control border border-control bg-surface px-3 py-2 text-base text-foreground placeholder:text-subtle disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm aria-invalid:border-danger', className)} {...props} />,
);
Textarea.displayName = 'Textarea';
