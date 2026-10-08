import * as React from 'react';
import { cn } from '../lib/utils';

export function Heading({ level = 2, className, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { level?: 1 | 2 | 3 }) {
  const Component = `h${level}` as 'h1' | 'h2' | 'h3';
  const sizes = { 1: 'text-[1.875rem] leading-[1.25] tracking-[-0.035em]', 2: 'text-lg leading-[1.45] tracking-[-0.02em]', 3: 'text-sm' };
  return <Component className={cn('m-0 font-semibold', sizes[level], className)} {...props} />;
}
export function Eyebrow({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('m-0 font-mono text-[0.6875rem] font-medium uppercase leading-6 tracking-[0.08em] text-subtle', className)} {...props} />;
}
export function Code({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <code className={cn('rounded-[var(--io-radius-sm)] bg-background px-1.5 py-0.5 font-mono text-xs text-muted', className)} {...props} />;
}
