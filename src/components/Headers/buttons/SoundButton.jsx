import React from 'react';
import styles from './SoundButton.module.css';
import soundGif from '@/assets/questions/soundOn.gif';
import { useQuiz } from '@/context/useQuiz.js';
import soundOff from '@/assets/icons/soundOff.svg';

export default function SoundButton() {
    const { isSoundOn, setIsSoundOn } = useQuiz();

    const toggleSound = () => {
        setIsSoundOn(prevState => !prevState);
    };

    return (
        <div className={styles.soundButtonContainer}>
            <button onClick={toggleSound} className={styles.onButton}>
                {isSoundOn ? 'ON' : 'OFF'}
            </button>
            <img
                src={isSoundOn ? soundGif : soundOff}
                alt={isSoundOn ? "Sound is on" : "Sound is off"} 
                className={styles.soundGif}
            />
        </div>
    );
}