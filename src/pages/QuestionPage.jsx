
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useQuiz } from '@/context/useQuiz.js';
import ExtendedHeader from '@/components/Headers/ExtendHeader';
import InstructionOverlay from '../components/InstructionOverlay';
import AnswerOptions from '@/components/mainquestions/AnswerOptions';
import HorizontalQuestions from '@/components/mainquestions/HorizontalQuestions';
import AnswersSidebar from '@/components/mainquestions/AnswersSidebar';
import FlashTransition from '@/components/FlashTransition'; // Add flash transition
import styles from './QuestionPage.module.css';

export default function QuestionPage() {
  const { id } = useParams();
  const indexFromUrl = Number(id);

  const { selectedBackground, saveAnswer, answers } = useQuiz();
  const navigate = useNavigate();

  // State for flash animation
  const [isFlashActive, setIsFlashActive] = useState(false);
  const [nextNavigation, setNextNavigation] = useState(null);

  const handleAnswerSelect = (questionIndex, answer) => {
    // Save the answer first
    saveAnswer(questionIndex, answer);

    // Determine next navigation
    const nextQuestionId = Number(id) + 1;
    const navigationPath = nextQuestionId > 12 ? '/decoding' : `/question/${nextQuestionId}`;

    
    if (indexFromUrl >= 2 && indexFromUrl <= 9) {
      
      setNextNavigation(navigationPath);
      setIsFlashActive(true);
    } else {
     
      navigate(navigationPath);
    }
  };

  // Handle flash animation completion
  const handleFlashComplete = () => {

    setIsFlashActive(false);

    // Navigate after flash completes
    if (nextNavigation) {
      navigate(nextNavigation);
      setNextNavigation(null);
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

      {/* Flash Transition Animation */}
      <FlashTransition
        isActive={isFlashActive}
        onComplete={handleFlashComplete}
        duration={600}
      />

    </div>
  );
}