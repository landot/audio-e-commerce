import { render, screen } from '@testing-library/react';
import Banner from './Banner';

describe('Banner', () => {
    test('renders the banner component with the provided text', () => {
        const text = 'Test';
        render(<Banner text={text} />);
        const textElement = screen.getByText(text);
        expect(textElement).toBeInTheDocument();
    });
});
