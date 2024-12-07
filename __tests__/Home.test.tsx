import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';

describe('Home Component', () => {
  it('updates the display input with the number entered by the user', () => {
    render(<Home />);

    const numericalInput = screen.getByPlaceholderText('Enter Number') as HTMLInputElement;
    const submitButton = screen.getByText('Set Number');
    const displayInput = screen.getByDisplayValue('0') as HTMLInputElement;

    fireEvent.change(numericalInput, { target: { value: '40' } });

    fireEvent.click(submitButton);

    expect(displayInput.value).toBe('40');
  });
});
