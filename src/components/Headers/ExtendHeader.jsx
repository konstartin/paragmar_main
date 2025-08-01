
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ExtendHeader.module.css';
import BackButton from './buttons/BackButton';
import SoundButton from './buttons/SoundButton';
import NavButton from './buttons/NavButton';
import logoSrc from '@/assets/questions/questionLogo.svg';
import CountdownTimer from './CountdownTimer';
import { useQuiz } from '@/context/QuizContext';
export default function ExtendedHeader({ currentQuestionId, backPath }) {

    const location = useLocation(); 
    const { resetQuiz} = useQuiz();
    const handleHomeClick = () => {
        resetQuiz();
        
    };

    return (
        <div className={styles.extendedHeaderContainer}>
            <div className={styles.leftWrapper}>
                <div className={styles.shutdownMessage}>
                    <div className={styles.shutdownText}>
                        Site shuts down in
                    </div>
                    <div className={styles.timerWrapper}>
                        <CountdownTimer key={currentQuestionId}/>
                    </div>
                </div>
                <div className={styles.backButtonWrapper}>
                    <BackButton path={backPath} />
                </div>
            </div>
            <div className={styles.logoWrapper}>
                <img src={logoSrc} alt="Logo" className={styles.logoImage} />
                <div className={styles.trademark}>TM</div>
           </div>
            <div className={styles.rightWrapper}>
                <div className={styles.homeButtonWrapper}>
                    <NavButton text="[home]" path="/" onClick={handleHomeClick} />
                </div>
                <div className={styles.aboutButtonWrapper}>
                    <NavButton text="[about]" path="/about" navState={{ from: location.pathname }} />
                </div>
                <SoundButton />
            </div>
        </div>
    );
}