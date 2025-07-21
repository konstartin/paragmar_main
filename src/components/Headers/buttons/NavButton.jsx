import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NavButton.module.css';

export default function NavButton({ text, path }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };

    return (
        <button onClick={handleClick} className={styles.navButton}>
            {text}
        </button>
    );
}