export function caesarCipher(text: string, shift: number, direction: 'forwards' | 'backwards'): string {
    if (direction === 'backwards') shift = -shift;

    return text.replace(/[a-zA-Z]/g, (char) => {
        const charCode = char.charCodeAt(0);
        const base = charCode >= 65 && charCode <= 90 ? 65 : 97;
        return String.fromCharCode(((charCode - base + shift) % 26 + 26) % 26 + base);
    });
}
