
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

export default function BackButton({ path }) {
    const navigate = useNavigate();

    const handleBackClick = () => {
        if (path) {
            navigate(path);
        } else {
            navigate(-1);
        }
    };

    return (
        <button onClick={handleBackClick} className={styles.backButton}>
            {'[<<<]'}
        </button>
    );
}