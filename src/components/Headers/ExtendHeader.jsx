
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ExtendHeader.module.css';
import BackButton from './buttons/BackButton';
import SoundButton from './buttons/SoundButton';
import NavButton from './buttons/NavButton';
import logoSrc from '@/assets/questions/questionLogo.svg';
import CountdownTimer from './CountdownTimer';
import { useQuiz } from '@/context/useQuiz.js';

export default function ExtendedHeader({ currentQuestionId, backPath }) {
    const location = useLocation();
    const { resetQuiz } = useQuiz();

    const handleHomeClick = () => {
        resetQuiz();
    };

    return (
        <div className={styles.extendedHeaderContainer}>

            <div className={styles.leftSection}>
                <div className={styles.shutdownMessage}>
                    <span className={styles.shutdownText}>Site shuts down in</span>
                    <CountdownTimer key={currentQuestionId} />
                </div>
                <BackButton path={backPath} />
            </div>

           
            <div className={styles.centerSection}>
                <img src={logoSrc} alt="Logo" className={styles.logoImage} />
                <div className={styles.trademark}>TM</div>
            </div>

          
            <div className={styles.rightSection}>
                <NavButton text="[home]" path="/" onClick={handleHomeClick} />
                <NavButton text="[about]" path="/about" navState={{ from: location.pathname }} />
                <SoundButton />
            </div>
            
        </div>
    );
}