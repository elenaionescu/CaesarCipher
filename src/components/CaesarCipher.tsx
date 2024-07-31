import React, { useState } from 'react';
import { caesarCipher } from '../utils/caesarCipher';

const CaesarCipher: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [shift, setShift] = useState<number>(3);
    const [direction, setDirection] = useState<'forwards' | 'backwards'>('forwards');
    const [output, setOutput] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

    const handleShiftChange = (e: React.ChangeEvent<HTMLInputElement>) => setShift(Number(e.target.value));

    const handleDirectionChange = (e: React.ChangeEvent<HTMLInputElement>) => setDirection(e.target.value as 'forwards' | 'backwards');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setOutput(caesarCipher(input, shift, direction));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="input">Text: </label>
                <input type="text" id="input" size={150} value={input} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="shift">Shift: </label>
                <input type="number" id="shift" value={shift} onChange={handleShiftChange} />
            </div>
            <div>
                <label>Direction:</label>
                <input type="radio" id="forwards" value="forwards" checked={direction === 'forwards'} onChange={handleDirectionChange} />
                <label htmlFor="forwards">Forwards</label>
                <input type="radio" id="backwards" value="backwards" checked={direction === 'backwards'} onChange={handleDirectionChange} />
                <label htmlFor="backwards">Backwards</label>
            </div>
            <button type="submit">Apply Cipher</button>
            <div>
                <h3>Output: {output}</h3>
                <p></p>
            </div>
        </form>
    );
};

export default CaesarCipher;
