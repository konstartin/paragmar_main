
import styles from './SelectionButton.module.css';
import React from 'react';

export default function SelectionButton({ onClick, text }) {
  return (
    <button className={styles.startButton} onClick={onClick}>
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}