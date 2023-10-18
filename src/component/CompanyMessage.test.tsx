import React from 'react';
import { render, screen } from '@testing-library/react';
import CompanyMessage from './CompanyMessage';

describe('CompanyMessage Component', () => {

    it('CompanyMessage component renders correctly', () => {
        render(<CompanyMessage />);

        const companyMessageContainer = screen.getByLabelText('company-message');
        expect(companyMessageContainer).toBeInTheDocument();
    });
});
