import { render, screen } from '@testing-library/react';
import GoBack from './GoBack';

describe('GoBack Component', () => {
    it('renders the GoBack component correctly', () => {
        const mockHref = '/home';
        render(<GoBack href={mockHref} />);

        // Check if the "Go Back" text is rendered
        const goBackText = screen.getByText(/Go Back/i);
        expect(goBackText).toBeInTheDocument();

        // Simulate a click event on the GoBack component
        const linkElement = screen.getByRole('link');

        // Check if the link's href attribute matches the expected value
        expect(linkElement).toHaveAttribute('href', mockHref);
    });
});