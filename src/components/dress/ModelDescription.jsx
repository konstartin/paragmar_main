import React from 'react';
import styles from './ModelDescription.module.css';
import { useQuiz } from '@/context/QuizContext';

const ModelDescription = () => {
  const { getproduct } = useQuiz();
  const product = getproduct();

  return (
    <div>
      <p>
        <span className={styles.title}>
          {product.id}
        </span>
        <br />
        <span className={styles.subtitle}>
          WE'RE CREATING A ONE OF A KIND LOOK BASED ON YOUR UNIQUE ALTER EGO.
        </span>
      </p>
    </div>
  );
};

export default ModelDescription;