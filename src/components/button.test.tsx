import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Button } from './button';

describe('Button', () => {
  it('renders an accessible button', async () => {
    const { container } = render(<Button variant="primary">Run task</Button>);
    expect(screen.getByRole('button', { name: 'Run task' })).toBeEnabled();
    expect((await axe(container)).violations).toHaveLength(0);
  });
});
