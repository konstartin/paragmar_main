import { useState, useEffect } from 'react';

/**
 * A custom hook to manage a "typing" text animation.
 * @param {object} options - The configuration options.
 * @param {string} options.textToType - The full text to be animated.
 * @param {number} options.speed - The typing speed in milliseconds per character.
 * @param {Function} options.onComplete - A callback function to execute when typing finishes.
 * @returns {string} The currently typed portion of the text.
 */
export function useTypingAnimation({ textToType, speed = 50, onComplete = () => {} }) {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        if (!textToType) return;
        
        setTypedText('');
        let i = 0;
        const interval = setInterval(() => {
            if (i < textToType.length) {
                const char = textToType[i];
                setTypedText(prev => prev + (char === '\n' ? '<br>' : char));
                i++;
            } else {
                clearInterval(interval);
                onComplete();
            }
        }, speed);

        return () => clearInterval(interval);
    }, [textToType, speed, onComplete]);

    return typedText;
}