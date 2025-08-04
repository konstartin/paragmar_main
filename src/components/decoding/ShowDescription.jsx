
import React, { useEffect, useState, useRef } from 'react';
import { useQuiz } from '@/context/useQuiz.js';
import { useNavigate } from 'react-router-dom';
import styles from './ShowDescription.module.css';
import SelectionButton from '../SelectionButton';

export default function ShowDescription() {
  const { getProduct } = useQuiz();
  const product = getProduct();
  const navigate = useNavigate();

  const title = product.title;
  const rawId = product.id ?? '';
  const part = (product.id?.split('//')[1] ?? product.id) || '';
  const idClean = `//${part.slice(0, -1)}`;

  const TEXTS = [
    product?.text1 || '',
    product?.text2 || '',
    product?.text3 || '',
  ];

  const PREFIX = '//';
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState(PREFIX);
  
  const [isButtonActive, setIsButtonActive] = useState(false);
  const idxRef = useRef(0);

  useEffect(() => {
    setTyped(PREFIX);
    idxRef.current = 0;

   
    if (phase === TEXTS.length - 1) {
      setIsButtonActive(true);
    }

    const text = TEXTS[phase] || '';
  
    const perCharDelay = text.length > 0 ? 6000 / text.length : 6000;

    const interval = setInterval(() => {
      idxRef.current += 1;
      setTyped(PREFIX + text.slice(0, idxRef.current));
      if (idxRef.current >= text.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (phase < TEXTS.length - 1) {
            setPhase((p) => p + 1);
          }
          
        }, 8000);
      }
    }, perCharDelay);

    return () => clearInterval(interval);
  }, [phase, TEXTS.length]); 

  const handleButtonClick = () => {

    if (!isButtonActive) return;
    navigate('/dress');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftTop}>
        <div className={styles.leftTopTitle}>{title}</div>
        <div className={styles.leftTopId}><span className={styles.idPrefix}>//</span>{idClean.slice(2)}</div>
      </div>

      <div className={styles.centerTyping}>
        {typed}
      </div>

      <div className={styles.bottomButton}>
        {/* ✨ 4. מעבירים את המשתנה החדש כ-prop לקומפוננטת הכפתור */}
        <SelectionButton
          text="REVEAL MY OUTFIT"
          onClick={handleButtonClick}
          isActive={isButtonActive}
        />
      </div>

      <div className={styles.bottomRight}>
        YOUR PERSONALITY IS ONE OF MANY. <br />
        YOUR ALTER EGO IS A REFLECTION OF THE DEEPEST LAYERS YOUR SOUL.
      </div>
    </div>
  );
}