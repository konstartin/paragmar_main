
import React, { createContext, useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { getObjectData } from '@/config/objectsConfig';

const QuizContext = createContext();

const productLogicMap = {
  'FIBER GRID': {
    'LOOSE FLOW': 'animal',
    'PIERCING FORM': 'warrior',
    'SOFT CLUSTER': 'eternal_child',
  },
  'CORAL FRAME': {
    'LOOOSE FLOW': 'rebel',
    'PIERCING FORM': 'diva',
    'SOFT CLUSTER': 'caretaker',
  },
  'SKELTAL BLOOM': {
    'LOOSE FLOW': 'mask',
    'PIERCING FORM': 'ruler',
    'SOFT CLUSTER': 'void',
  },
};

export function QuizProvider({ children }) {
  const [selectedBackground, setSelectedBackground] = useState(() => {
    try {
      const saved = localStorage.getItem('selectedBackground');
      return saved || null;
    } catch {
      return null;
    }
  });

  const [isSoundOn, setIsSoundOn] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [viewMode, setViewMode] = useState('animation');

  const [finalProductKey, setFinalProductKey] = useState(() => {
    try {
      return localStorage.getItem('finalProductKey') || null;
    } catch {
      return null;
    }
  });

  const finalProduct = useMemo(
    () => (finalProductKey ? getObjectData(finalProductKey) : null),
    [finalProductKey]
  );

  useEffect(() => {
    if (selectedBackground) localStorage.setItem('selectedBackground', selectedBackground);
    else localStorage.removeItem('selectedBackground');
  }, [selectedBackground]);

  useEffect(() => {
    if (finalProductKey) localStorage.setItem('finalProductKey', finalProductKey);
    else localStorage.removeItem('finalProductKey');
  }, [finalProductKey]);

  const determineAndSetProduct = useCallback(() => {
    const answer10 = answers[9];
    const answer12 = answers[11];
    let productKey = 'warrior';
    if (answer10 && answer12) {
      const determinedKey = productLogicMap[answer10.label]?.[answer12.label];
      if (determinedKey) productKey = determinedKey;
    }
    setFinalProductKey(productKey);
  }, [answers]);

  const getProduct = () => finalProduct;

  const resetQuiz = () => {
    setSelectedBackground(null);
    setIsSoundOn(true);
    setCurrentIndex(0);
    setAnswers({});
    setFinalProductKey(null);
    localStorage.removeItem('selectedBackground');
    localStorage.removeItem('finalProductKey');
  };

  const saveAnswer = (questionIndex, answer) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const next = () => setCurrentIndex((prev) => prev + 1);
  const prev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  const goto = (index) => setCurrentIndex(index);

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
    getProduct,
    viewMode,
    setViewMode,
    determineAndSetProduct,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  return useContext(QuizContext);
}
