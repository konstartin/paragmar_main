import React from 'react';
import { useQuiz } from '@/context/QuizContext';
import ExtendedHeader from '@/components/Headers/ExtendHeader';
import DecodingContent from '@/components/decoding/DecodingContent';
import styles from './QuestionPage.module.css';

export default function DecodingPage() {
  const { selectedBackground } = useQuiz();

  return (
    <div className={`${styles.pageContainer} ${selectedBackground}`}>
      <div className={styles.headerPlacement}>
        <ExtendedHeader currentQuestionId={13} />
      </div>
      
      <DecodingContent />
    </div>
  );
}