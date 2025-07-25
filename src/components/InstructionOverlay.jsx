import React from 'react';
import styles from './InstructionOverlay.module.css';
import neonizeSvg from '../assets/questions/Neonize.svg';

export default function InstructionOverlay({ currentStep, line1, line2 }) {
  const formattedStep = String(currentStep).padStart(2, '0');

  return (
    <div className={styles.centerOverlay}>
      <div className={styles.progressContainer}>
        <span className={styles.progressText}>{formattedStep}</span>
        <img src={neonizeSvg} alt="Progress Line" className={styles.progressLine} />
        <span className={styles.progressText}>12</span>
      </div>
      <div className={styles.instructionContainer}>
        <span>{line1}</span>
        <span className={styles.boldText}>{line2}</span>
      </div>
    </div>
  );
}