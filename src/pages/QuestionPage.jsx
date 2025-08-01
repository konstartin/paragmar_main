import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useQuiz } from '@/context/QuizContext';
import ExtendedHeader from '@/components/Headers/ExtendHeader';
import InstructionOverlay from '../components/InstructionOverlay';
import AnswerOptions from '@/components/mainquestions/AnswerOptions';
import HorizontalQuestions from '@/components/mainquestions/HorizontalQuestions';
import AnswersSidebar from '@/components/mainquestions/AnswersSidebar';
import styles from './QuestionPage.module.css';

export default function QuestionPage() {
  const { id } = useParams();
  const indexFromUrl = Number(id);

  const { selectedBackground, saveAnswer,answers } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedBackground) {
      navigate('/question/1');
    }
  }, [selectedBackground, navigate]);

  const handleAnswerSelect = (questionIndex, answer) => {
    saveAnswer(questionIndex, answer);

    const nextQuestionId = Number(id) + 1;

    if (nextQuestionId > 12) {
      navigate('/decoding');
    } else {
      navigate(`/question/${nextQuestionId}`);
    }
  };

  const getInstructionText = (questionNumber) => {
    if (questionNumber === 1) {
      return {
        line1: "click to choose",
        line2: "your environment"
      };
    } else if (questionNumber >= 2 && questionNumber <= 9) {
      return {
        line1: "click to choose",
        line2: "what do you see?"
      };
    } else if (questionNumber === 10) {
      return {
        line1: "click to choose",
        line2: "which world matches your energy?"
      };
    } else if (questionNumber === 11) {
      return {
        line1: "click to choose",
        line2: "which movement pulls you in instinctively?"
      };
    } else if (questionNumber === 12) {
      return {
        line1: "click to choose",
        line2: "what sensation draws you?"
      };
    }
    return {
      line1: "click to choose",
      line2: "your environment"
    };
  };

  if (indexFromUrl < 1) {
    return null;
  }

  const instructionText = getInstructionText(indexFromUrl);

  return (
    <div className={`${styles.pageContainer}`}>
      <div className={styles.headerPlacement}>
        <ExtendedHeader
          currentQuestionId={Number(id)}
          backPath={`/question/${Number(id) - 1}`}
        />
      </div>
      <div className={styles.titlePlacement}>
        <InstructionOverlay
          currentStep={indexFromUrl}
          line1={instructionText.line1}
          line2={instructionText.line2}
        />
      </div>
      {indexFromUrl >= 10 ? (
        <HorizontalQuestions
          questionIndex={indexFromUrl}
          onAnswer={handleAnswerSelect}
        />
      ) : (
        <AnswerOptions
          questionIndex={indexFromUrl}
          onAnswer={handleAnswerSelect}
        />
      )}
      <div className={styles.sidebarPlacement}>
        <AnswersSidebar />
      </div>
    </div>
  );
}