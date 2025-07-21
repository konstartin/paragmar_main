
import React, { useEffect } from 'react';
import { useQuiz } from '@/context/QuizContext';
import { useNavigate, useParams } from 'react-router-dom';
import AnswerOptions from '@/components/mainquestions/AnswerOptions';
import InstructionOverlay from '../components/InstructionOverlay';
import ExtendedHeader from '@/components/Headers/ExtendHeader';
import styles from './QuestionPage.module.css';

export default function QuestionPage() {
  const { id } = useParams();
  const indexFromUrl = Number(id) - 1;

  const { selectedBackground, saveAnswer } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedBackground) {
      navigate('/question/1');
    }
  }, [selectedBackground, navigate]);

  const handleAnswerSelect = (questionIndex, answer) => {
    saveAnswer(questionIndex, answer);
    const nextQuestionId = Number(id) + 1;
    navigate(`/question/${nextQuestionId}`);
  };

  if (indexFromUrl < 1) {
    return null;
  }

  return (
    <div className={`${styles.pageContainer} ${selectedBackground}`}>
      <div className={styles.headerPlacement}>
        <ExtendedHeader currentQuestionId={Number(id)} />
      </div>
      <div className={styles.titlePlacement}>
        <InstructionOverlay
                      currentStep={indexFromUrl + 1}
                      line1="click to choose"
                      line2="your environment"
                    />
       </div>
      <AnswerOptions
        questionIndex={indexFromUrl}
        onAnswer={handleAnswerSelect}
      />
    </div>
  );
}