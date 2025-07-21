import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

export default function BackButton({ currentQuestionId }) {
    const navigate = useNavigate();

    const handleBackClick = () => {
        const numericId = Number(currentQuestionId);
        if (numericId > 1) {
            const previousQuestionId = numericId - 1;
            navigate(`/question/${previousQuestionId}`);
        }
    };

    return (
        <button onClick={handleBackClick} className={styles.backButton}>
            {'[<<<]'}
        </button>
    );
}