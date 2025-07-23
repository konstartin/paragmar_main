
import React, { createContext, useState, useContext, useEffect } from 'react';

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [selectedBackground, setSelectedBackground] = useState(() => {
    try {
      const saved = localStorage.getItem('selectedBackground');
      return saved || null;
    } catch (error) {
      return null;
    }
  });

  const [isSoundOn, setIsSoundOn] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (selectedBackground) {
      localStorage.setItem('selectedBackground', selectedBackground);
    } else {
      localStorage.removeItem('selectedBackground');
    }
  }, [selectedBackground]);

  const resetQuiz = () => {
    setSelectedBackground(null);
    setIsSoundOn(true);
    setCurrentIndex(0);
    setAnswers({});
    localStorage.removeItem('selectedBackground');
    console.log('Quiz has been reset');
  };

  const saveAnswer = (questionIndex, answer) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const next = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const goto = (index) => {
    setCurrentIndex(index);
  };

  const value = {
    selectedBackground,
    selectBackground: setSelectedBackground,
    isSoundOn,
    setIsSoundOn,
    currentIndex,
    answers,
    saveAnswer,
    next,
    prev,
    goto,
    resetQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  return useContext(QuizContext);
}