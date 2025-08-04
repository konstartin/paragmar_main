
import styles from './SelectionButton.module.css';
import React from 'react';

export default function SelectionButton({ onClick, text ,isActive = true}) {
  return (
    <button
      className={`${styles.startButton} ${!isActive ? styles.inactive : ''}`}
      onClick={onClick}
      disabled={!isActive} 
    >
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}