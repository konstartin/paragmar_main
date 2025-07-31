import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import styles from './NavButton.module.css';

export default function NavButton({ text, path, navState }) {
    const navigate = useNavigate();
    const location = useLocation(); 

    const handleClick = () => {
        if (location.pathname === path) {
            return; 
        }
        
        navigate(path, { state: navState });
    };

    return (
        <button 
          onClick={handleClick} 
          className={styles.navButton}
        >
            {text}
        </button>
    );
}