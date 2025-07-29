// /src/components/SoundManager.jsx
import React, { useRef, useEffect } from 'react';

// Import sound files
import showProductSound from '@/assets/sounds/alter_ago_sound.aac';
import dressSound from '@/assets/sounds/dress_page_sound.aac';
import hoverSound from '@/assets/sounds/hover.aac';
import flashSound from '@/assets/sounds/flash_sound.aac';

const SoundManager = () => {
    const audioRefs = useRef({
        showProduct: null,
        dressSound: null,
        hover: null,
        flashSound: null
    });



    // Initialize audio elements
    useEffect(() => {
        audioRefs.current.showProduct = new Audio(showProductSound);
        audioRefs.current.dressSound = new Audio(dressSound);
        audioRefs.current.hover = new Audio(hoverSound);
        audioRefs.current.flashSound = new Audio(flashSound);

        // Set properties
        Object.values(audioRefs.current).forEach(audio => {
            if (audio) {
                audio.preload = 'auto';
                if (type === 'dressSound') {
                    audio.volume = 1.0; // ← Увеличить с 0.3 до 0.8
                } else {
                    audio.volume = 0.3; // 30% громкости
                }
            }
        });
    }, []);

    // Play sound function
    const playSound = (soundType) => {
        const audio = audioRefs.current[soundType];
        if (audio) {
            audio.currentTime = 0; // Reset to start
            audio.play().catch(e => console.log('Sound play failed:', e));
        }
    };

    // Expose play function globally
    useEffect(() => {
        window.playSound = playSound;
    }, []);

    return null; // Invisible component
};

export default SoundManager;