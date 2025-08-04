// src/components/FlashTransition.jsx

import React, { useEffect, useState } from 'react';
import styles from './FlashTransition.module.css';

const FlashTransition = ({
    isActive,
    onComplete,
    duration = 600
}) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isActive) {
            setIsAnimating(true);

            const timer = setTimeout(() => {
                setIsAnimating(false);
                if (onComplete) {
                    onComplete();
                }
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [isActive, onComplete, duration]);

    if (!isActive && !isAnimating) {
        return null;
    }

    return (
        <div className={`${styles.flashContainer} ${isAnimating ? styles.whiteFlash : ''}`}>
            <div
                className={`${styles.flashSpot} ${isAnimating ? styles.flashActive : ''}`}
                style={{ animationDuration: `${duration}ms` }}
            />
        </div>
    );
};

export default FlashTransition;