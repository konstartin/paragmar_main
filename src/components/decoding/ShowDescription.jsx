
import React, { useEffect, useState, useRef } from 'react';
import { useQuiz } from '@/context/useQuiz.js';import { useNavigate } from 'react-router-dom';
import styles from './ShowDescription.module.css';

export default function ShowDescription() {
  const { getProduct } = useQuiz();
  const product = getProduct();
  const navigate = useNavigate();

  const title = product.title;
  const rawId = product.id ?? '';
  const part = (product.id?.split('//')[1] ?? product.id) || '';
  const idClean = `//${part.slice(0, -1)}`;



const TEXTS = [
    product?.text1 || '', // Use text1 from product, fallback to empty string
    product?.text2 || '', // Use text2 from product
    product?.text3 || '', // Use text3 from product
  ];

  const PREFIX = '//';
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState(PREFIX);
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const idxRef = useRef(0);

  useEffect(() => {
    setTyped(PREFIX);
    idxRef.current = 0;

    const text = TEXTS[phase] || '';
    const perCharDelay = 6000 / text.length;

    const interval = setInterval(() => {
      idxRef.current += 1;
      setTyped(PREFIX + text.slice(0, idxRef.current));
      if (idxRef.current >= text.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (phase < TEXTS.length - 1) {
            setPhase((p) => p + 1);
          } else {
            setButtonEnabled(true);
          }
        }, 1500);
      }
    }, perCharDelay);

    return () => clearInterval(interval);
  }, [phase]);

  const handleButtonClick = () => {
    if (!buttonEnabled) return;
    navigate('/dress');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftTop}>
        <div className={styles.leftTopTitle}>{title}</div>
        <div className={styles.leftTopId}>{idClean}</div>
      </div>

      <div className={styles.centerTyping}>
        {typed}
      </div>

      <button
        className={`${styles.bottomButton} ${buttonEnabled ? styles.btnEnabled : styles.btnDisabled}`}
        onClick={handleButtonClick}
        disabled={!buttonEnabled}
      >
        REVEAL MY OUTFIT
      </button>

      <div className={styles.bottomRight}>
        YOUR PERSONALITY IS ONE OF MANY. <br />
        YOUR ALTER EGO IS A REFLECTION OF THE DEEPEST LAYERS YOUR SOUL.
      </div>
    </div>
  );
}
