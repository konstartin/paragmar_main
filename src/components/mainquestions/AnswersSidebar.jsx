import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import styles from './AnswersSidebar.module.css';

export default function AnswersSidebar() {
  const { answers } = useQuiz();
  const navigate = useNavigate();

  const handleQuestionClick = (questionIndex) => {
    const questionId = Number(questionIndex) + 1;
    navigate(`/question/${questionId}`);
  };

  return (
    <div className={styles.sidebarContainer}>
      
      {Object.keys(answers).length > 0 && (
        <ul className={styles.answersList}>
          {Object.entries(answers).map(([questionIndex, answer]) => (
            <li
              key={questionIndex}
              className={styles.answerItem}
              onClick={() => handleQuestionClick(questionIndex)}
            >
              <span className={styles.questionNumber}>
                {`//${String(Number(questionIndex) + 1).padStart(2, '0')}`}
              </span>
              <span className={styles.answerLabel}>
                {answer.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}