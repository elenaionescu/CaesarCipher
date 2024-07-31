import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CaesarCipher from './CaesarCipher';

describe('CaesarCipher Component', () => {
    test('renders the form elements correctly', () => {
        render(<CaesarCipher />);
        expect(screen.getByLabelText(/Text:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Shift:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Forwards/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Backwards/i)).toBeInTheDocument();
        expect(screen.getByText(/Apply Cipher/i)).toBeInTheDocument();
    });

    test('applies cipher and displays the output', () => {
        render(<CaesarCipher />);
        fireEvent.change(screen.getByLabelText(/Text:/i), { target: { value: 'hello' } });
        fireEvent.change(screen.getByLabelText(/Shift:/i), { target: { value: 1 } });
        fireEvent.click(screen.getByLabelText(/Forwards/i));
        fireEvent.click(screen.getByText(/Apply Cipher/i));

        console.log(screen.getByText(/Output:/i).textContent);

        expect(screen.getByText(/Output:/i).textContent).toBe('Output: ifmmp');
    });

    test('handles backward direction cipher', () => {
        render(<CaesarCipher />);
        fireEvent.change(screen.getByLabelText(/Text:/i), { target: { value: 'ifmmp' } });
        fireEvent.change(screen.getByLabelText(/Shift:/i), { target: { value: 1 } });
        fireEvent.click(screen.getByLabelText(/Backwards/i));
        fireEvent.click(screen.getByText(/Apply Cipher/i));

        expect(screen.getByText(/Output:/i).textContent).toBe('Output: hello');
    });

    test('ignores non-alphabetic characters', () => {
        render(<CaesarCipher />);
        fireEvent.change(screen.getByLabelText(/Text:/i), { target: { value: 'hello123!@#' } });
        fireEvent.change(screen.getByLabelText(/Shift:/i), { target: { value: 1 } });
        fireEvent.click(screen.getByLabelText(/Forwards/i));
        fireEvent.click(screen.getByText(/Apply Cipher/i));

        expect(screen.getByText(/Output:/i).textContent).toBe('Output: ifmmp123!@#');
    });

    test('maintains case sensitivity', () => {
        render(<CaesarCipher />);
        fireEvent.change(screen.getByLabelText(/Text:/i), { target: { value: 'Hello World' } });
        fireEvent.change(screen.getByLabelText(/Shift:/i), { target: { value: 1 } });
        fireEvent.click(screen.getByLabelText(/Forwards/i));
        fireEvent.click(screen.getByText(/Apply Cipher/i));

        expect(screen.getByText(/Output:/i).textContent).toBe('Output: Ifmmp Xpsme');
    });
});
