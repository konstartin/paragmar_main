import React from 'react';
import styles from './SoundButton.module.css';
import soundGif from '@/assets/questions/soundOn.gif';
import { useQuiz } from '@/context/QuizContext';

export default function SoundButton() {
    const { isSoundOn, setIsSoundOn } = useQuiz();

    const toggleSound = () => {
        setIsSoundOn(prevState => !prevState);
    };

    return (
        <div className={styles.soundButtonContainer}>
            <button onClick={toggleSound} className={styles.onButton}>
                ON
            </button>
            {isSoundOn && (
                <img src={soundGif} alt="Sound is on" className={styles.soundGif} />
            )}
        </div>
    );
}