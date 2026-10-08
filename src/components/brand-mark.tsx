import * as React from 'react';
import { cn } from '../lib/utils';

export function BrandMark({ className, title = 'Import.io', ...props }: React.SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg viewBox="0 0 113 151" role="img" aria-label={title} className={cn('h-auto w-8', className)} {...props}>
      <path d="m40.411 75.5 35.897 35.725 35.905-35.717-35.905-35.725-35.897 35.718ZM.51 35.718l35.898 35.724 35.904-35.718L36.408 0 .51 35.718ZM.51 115.217l35.898 35.725 35.904-35.718L36.408 79.5.51 115.217Z" fill="var(--io-color-brand)" />
    </svg>
  );
}
