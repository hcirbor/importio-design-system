import * as React from 'react';
import { cn } from '../lib/utils';

export function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return <div className="w-full overflow-auto"><table className={cn('w-full border-collapse text-left text-sm', className)} {...props} /></div>;
}
export function TableHeader({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) { return <thead className={cn('bg-raised text-xs text-muted', className)} {...props} />; }
export function TableBody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) { return <tbody className={cn('[&_tr:last-child]:border-0', className)} {...props} />; }
export function TableRow({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) { return <tr className={cn('border-b transition-colors hover:bg-raised', className)} {...props} />; }
export function TableHead({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) { return <th className={cn('h-11 whitespace-nowrap px-6 font-medium', className)} {...props} />; }
export function TableCell({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) { return <td className={cn('whitespace-nowrap px-6 py-3.5', className)} {...props} />; }
export function TableCaption({ className, ...props }: React.HTMLAttributes<HTMLTableCaptionElement>) { return <caption className={cn('p-4 text-left text-xs text-subtle', className)} {...props} />; }
