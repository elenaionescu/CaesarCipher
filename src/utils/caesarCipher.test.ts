import { caesarCipher } from './caesarCipher';

describe('caesarCipher', () => {
    test('shifts letters forwards correctly', () => {
        expect(caesarCipher('abc', 3, 'forwards')).toBe('def');
        expect(caesarCipher('xyz', 3, 'forwards')).toBe('abc');
    });

    test('shifts letters backwards correctly', () => {
        expect(caesarCipher('def', 3, 'backwards')).toBe('abc');
        expect(caesarCipher('abc', 3, 'backwards')).toBe('xyz');
    });

    test('ignores non-alphabetic characters', () => {
        expect(caesarCipher('a!b@c#', 1, 'forwards')).toBe('b!c@d#');
        expect(caesarCipher('x.y,z', 2, 'backwards')).toBe('v.w,x');
    });

    test('handles empty input', () => {
        expect(caesarCipher('', 5, 'forwards')).toBe('');
    });

    test('maintains case sensitivity', () => {
        expect(caesarCipher('AbC', 2, 'forwards')).toBe('CdE');
        expect(caesarCipher('XyZ', 1, 'backwards')).toBe('WxY');
    });

    test('handles large shifts correctly', () => {
        expect(caesarCipher('abc', 52, 'forwards')).toBe('abc');
        expect(caesarCipher('xyz', 25, 'forwards')).toBe('wxy');
    });
});
