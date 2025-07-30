
import React, { useEffect, useRef } from 'react';
import { useQuiz } from '@/context/QuizContext';
import { useNavigate } from 'react-router-dom';

import styles from './ShowProduct.module.css';

export default function ShowProduct() {
  const { getProduct } = useQuiz();
  const product = getProduct();

  console.log('Product received in ShowProduct component:', product);
  
   if (!product) {
    
    return <div>Loading Product...</div>;
  }


  const navigate = useNavigate();
  const centerRef = useRef(null);



  useEffect(() => {
    const soundTimer = setTimeout(() => {
      if (window.playSound) {
        // console.log('Playing dress sound...');
        window.playSound('dressSound');
      } else {
        console.log('playSound not available');
      }
    }, 10);

    return () => clearTimeout(soundTimer);
  }, []);


  useEffect(() => {
    const el = centerRef.current;
    const endHandler = () => {
      setTimeout(() => navigate('/decoding/showdescription'), 1000);
    };
    el.addEventListener('animationend', endHandler);
    return () => el.removeEventListener('animationend', endHandler);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div ref={centerRef} className={`${styles.centerBlock} ${styles.fadeIn}`}>
        <p className={styles.preTitle}>CONGRATS YOU ARE</p>
        <h1 className={styles.mainTitle}>{product.title}</h1>
        <div className={styles.codeRow}>
          <span className={styles.codeLeft}>PERSONALITY CODE:</span>
          <span className={styles.codeRight}>{product.id}</span>
        </div>
      </div>
    </div>
  );
}
