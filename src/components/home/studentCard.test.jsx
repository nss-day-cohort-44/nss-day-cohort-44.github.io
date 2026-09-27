import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ApplicationViews from '../ApplicationViews';
import students from '../../modules/students';
import StudentCard from './studentCard';

describe('StudentCard', () => {
  it('renders student portraits and safe, accessible external links', () => {
    const student = students[0];
    const { container } = render(<StudentCard student={student} />);
    const [portrait, decorativePhoto] = container.querySelectorAll('picture img');

    expect(screen.getByRole('heading', {
      name: `${student.firstName} ${student.lastName}`,
    })).toBeInTheDocument();
    expect(portrait).toHaveAttribute(
      'alt',
      `${student.firstName} ${student.lastName} portrait`,
    );
    expect(decorativePhoto).toHaveAttribute('alt', '');

    const externalLinks = screen.getAllByRole('link').filter(link => link.target === '_blank');
    expect(externalLinks.length).toBeGreaterThan(0);
    externalLinks.forEach(link => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('aria-label');
    });
  });
});

describe('ApplicationViews', () => {
  it('renders the home page at the root URL', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ApplicationViews />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Nashville Software School Day Cohort 44/)).toBeInTheDocument();
  });
});