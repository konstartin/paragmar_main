
import React, { useEffect } from 'react';
import { useQuiz } from '@/context/QuizContext';
import { useNavigate } from 'react-router-dom';
import styles from './DecodingContent.module.css';

export default function DecodingContent() {
  const { determineAndSetProduct } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    determineAndSetProduct?.();
    const t = setTimeout(() => navigate('showproduct'), 2000);
    return () => clearTimeout(t);
  }, [determineAndSetProduct, navigate]);

  return (
    <div className={styles.container}>

      <span className={styles.leftNumber}>//01</span>
      <span className={styles.leftCategory}>OCEAN</span>

      <section className={styles.centerSection}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>DECODING</h1>
          <h1 className={styles.title}>ALTEREGO</h1>
        </div>
      </section>

      <span className={styles.rightCategory}>OCEAN</span>
      <span className={styles.rightNumber}>//02</span>

      <p className={styles.description}>
        HOLD TIGHT WHILE WE<br />
        UNCOVER YOUR HIDDEN SELF
      </p>
    </div>
  );
}
