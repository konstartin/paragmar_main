import React from 'react';
import styles from './ShowQuestion.module.css';

export default function ShowQuestion({ text }) {
  return (
    <div className={styles.container}>
      <h2>{text}</h2>
    </div>
  );
}