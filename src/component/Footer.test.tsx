import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the Footer component correctly', () => {
    render(<Footer />);
    // Check if the logo is rendered
    const logoImage = screen.getByAltText('audiophile logo');
    expect(logoImage).toBeInTheDocument();

    // Check if the company description is rendered
    const descriptionText = screen.getByText(/Audiophile is an all in one stop to fulfill your audio needs/i);
    expect(descriptionText).toBeInTheDocument();

    // Check if the copyright text is rendered
    const copyrightText = screen.getByText(/Copyright 2021\. All Rights Reserved/i);
    expect(copyrightText).toBeInTheDocument();

    const links = screen.queryAllByRole('link');
    expect(links.length).toBe(7);
  });
});