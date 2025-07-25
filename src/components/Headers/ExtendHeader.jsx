
import React from 'react';
import styles from './ExtendHeader.module.css';
import BackButton from './buttons/BackButton';
import SoundButton from './buttons/SoundButton';
import NavButton from './buttons/NavButton';
import logoSrc from '@/assets/questions/questionLogo.svg';
import CountdownTimer from './CountdownTimer';

export default function ExtendedHeader({ currentQuestionId, backPath }) {
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
                    <NavButton text="[home]" path="/" />
                </div>
                <div className={styles.aboutButtonWrapper}>
                    <NavButton text="[about]" path="/about" />
                </div>
                <SoundButton />
            </div>
        </div>
    );
}