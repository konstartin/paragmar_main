
import React from 'react';
import { useQuiz } from '@/context/QuizContext';
import layerSvg from '@/assets/questions/Layer.svg';
import { getQuestionConfig } from '@/config/QuestionPageConfig';
import { getSplineConfig } from '@/config/splineConfig';
import SplineScene from '@/components/mainquestions/SplineScene';
import styles from './AnswerOptions.module.css';

export default function AnswerOptions({ questionIndex, onAnswer }) {
  const { answers } = useQuiz();
  const selected = answers[questionIndex];
  const question = getQuestionConfig(questionIndex);
  const positions = question.positions;
  const config = getSplineConfig(questionIndex + 1);

  const handleSelect = (value) => {
    onAnswer(questionIndex, value);
  };

  const buildColumn = (topKey, bottomKey, className) => {
    const top = positions[topKey];
    const bottom = positions[bottomKey];
    return (
      <div className={`${styles.column} ${className}`}>
        <button
          className={`${styles.option} ${selected === top.value ? styles.selected : ''}`}
          onClick={() => handleSelect(top.value)}
        >
          {top.label}
        </button>
        <img src={layerSvg} className={styles.divider} alt="Divider" />
        <button
          className={`${styles.option} ${selected === bottom.value ? styles.selected : ''}`}
          onClick={() => handleSelect(bottom.value)}
        >
          {bottom.label}
        </button>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionsWrapper}>
        {buildColumn('leftTop', 'leftBottom', styles.leftColumn)}
        {buildColumn('rightTop', 'rightBottom', styles.rightColumn)}
      </div>
      <div className={styles.modelWrapper}>
        <SplineScene config={config} />
      </div>
    </div>
  );
}