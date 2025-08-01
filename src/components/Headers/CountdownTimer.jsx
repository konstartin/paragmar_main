import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import styles from './CountdownTimer.module.css';

export default function CountdownTimer() {
    const ninetySeconds = 3 * 60 * 1000;
    const [timeLeft, setTimeLeft] = useState(ninetySeconds);
    const { resetQuiz } = useQuiz();
    const navigate = useNavigate();

    useEffect(() => {
        if (timeLeft <= 0) {
            resetQuiz();
            navigate('/');
            return;
        }

        const intervalId = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 10);
        }, 10);

        return () => clearInterval(intervalId);
    }, [timeLeft, navigate]);

    const formatTime = (time) => {
        const minutes = Math.floor((time / 1000) / 60);
        const seconds = Math.floor((time / 1000) % 60);
        const milliseconds = Math.floor((time % 1000) / 10);

        const paddedMinutes = String(minutes).padStart(2, '0');
        const paddedSeconds = String(seconds).padStart(2, '0');
        const paddedMilliseconds = String(milliseconds).padStart(2, '0');

        return `${paddedMinutes}:${paddedSeconds}:${paddedMilliseconds}`;
    };
    return (
        <div className={styles.timer}>
            <span>{formatTime(timeLeft)}</span>
        </div>
    );
}