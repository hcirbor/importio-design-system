import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex min-h-10 items-center justify-center gap-2 rounded-control border px-4 py-2 text-sm font-medium transition-colors duration-[var(--io-duration-fast)] ease-standard disabled:pointer-events-none disabled:opacity-45 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'border-primary bg-primary text-on-primary hover:border-primary-hover hover:bg-primary-hover',
        secondary: 'border-control bg-surface text-foreground hover:bg-raised',
        ghost: 'border-transparent bg-transparent text-foreground hover:bg-raised',
        danger: 'border-control bg-surface text-danger hover:bg-danger-soft',
      },
      size: {
        sm: 'min-h-8 px-3 text-xs',
        md: 'min-h-10 px-4',
        lg: 'min-h-11 px-5',
        icon: 'size-10 p-0',
      },
    },
    defaultVariants: { variant: 'secondary', size: 'md' },
  },
);
