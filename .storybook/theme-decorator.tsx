import React, { useEffect } from 'react';

export function ThemeDecorator({ theme, children }: { theme: string; children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    return () => { delete document.documentElement.dataset.theme; };
  }, [theme]);

  return <div className="min-h-screen bg-background p-8 text-foreground">{children}</div>;
}
