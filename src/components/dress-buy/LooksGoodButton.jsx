import React from 'react';
import styles from './LooksGoodButton.module.css';
import looksGoodSvg from '@/assets/icons/looks_good.svg';
import startOverSvg from '@/assets/icons/start_over.svg';

const LooksGoodButton = ({ onLooksGood, onStartOver }) => {
    return (
        <div className={styles.buttonContainer}>
            <img
                src={looksGoodSvg}
                alt="Looks Good"
                className={styles.buttonSvg}
                onClick={onLooksGood}
            />
            <img
                src={startOverSvg}
                alt="Start Over"
                className={styles.buttonSvg}
                onClick={onStartOver}
            />
        </div>
    );
};

export default LooksGoodButton;