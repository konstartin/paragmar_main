import React from 'react';
import styles from './SimpleHeader.module.css';
import BackButton from './buttons/BackButton';
import SoundButton from './buttons/SoundButton';
import logoSrc from '../../assets/questions/questionLogo.svg';

export default function SimpleHeader() {
    return (
        <div className={styles.simpleHeaderContainer}>
            <div className={styles.backButtonWrapper}>
                <BackButton currentQuestionId={1} />
            </div>
            <div className={styles.logoWrapper}>
                <img src={logoSrc} alt="Logo" className={styles.logoImage} />
                <div className={styles.trademark}>TM</div>
            </div>
            <div className={styles.soundButtonWrapper}>
                <SoundButton />
            </div>
        </div>
    );
}