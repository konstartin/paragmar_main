import { useState, useEffect } from 'react';

/**
 * A custom hook to manage a progress animation over a set duration.
 * @param {object} options - The configuration options.
 * @param {number} options.duration - The total duration of the animation in milliseconds.
 * @param {Function} options.onComplete - A callback function to execute when the animation finishes.
 * @returns {number} The current progress value (0-100).
 */
export function useProgressAnimation({ duration = 4000, onComplete = () => {} }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const intervalTime = 40; // Update frequency
        const totalSteps = duration / intervalTime;
        const increment = 100 / totalSteps;

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    onComplete();
                    return 100;
                }
                return prev + increment;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, [duration, onComplete]);

    return Math.floor(progress);
}