
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
    'LOOSE FLOW': 'rebel',
    'PIERCING FORM': 'diva',
    'SOFT CLUSTER': 'caretaker',
  },
  
  'SKELETAL BLOOM': {
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
  const [transitionState, setTransitionState] = useState({
    isActive: false,
    onComplete: null,
  });

  const [isSoundOn, setIsSoundOn] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(() => {
  try {
    const savedAnswers = localStorage.getItem('quizAnswers');
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  } catch {
    return {};
  }
});
  const [viewMode, setViewMode] = useState('animation');

  const [finalProductKey, setFinalProductKey] = useState(() => {
    try {
      return localStorage.getItem('finalProductKey') || null;
    } catch {
      return null;
    }
  });

const finalProduct = useMemo(() => { 
    if (!finalProductKey) return null;

    const productData = getObjectData(finalProductKey);
    console.log(`Result from getObjectData for key "${finalProductKey}":`, productData);

    return productData;
}, [finalProductKey]);

const triggerTransition = (onTransitionEndCallback) => {
    setTransitionState({
      isActive: true,
      onComplete: () => {
        if (onTransitionEndCallback) {
          onTransitionEndCallback();
        }
        setTransitionState({ isActive: false, onComplete: null });
      },
    });
  };

  useEffect(() => {
    if (selectedBackground) localStorage.setItem('selectedBackground', selectedBackground);
    else localStorage.removeItem('selectedBackground');
  }, [selectedBackground]);

  useEffect(() => {
    if (finalProductKey) localStorage.setItem('finalProductKey', finalProductKey);
    else localStorage.removeItem('finalProductKey');
  }, [finalProductKey]);

  useEffect(() => {
  localStorage.setItem('quizAnswers', JSON.stringify(answers));
}, [answers]);

  const determineAndSetProduct = useCallback(() => {
    const answer10 = answers[10]?.label;
    const answer12 = answers[12]?.label;
    console.log('Answer 10.label:', answer10);
    console.log('Answer 12.label:', answer12);
    console.log('Answer 10:', answers[10]);
    console.log('Answer 12:', answers[12]);
    let productKey = 'warrior';
    if (answer10 && answer12) {
      const determinedKey = productLogicMap[answer10]?.[answer12];
      console.log('Determined Key:', determinedKey);
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
    transitionState,
    triggerTransition,
  };

  setViewMode
  getProduct

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  return useContext(QuizContext);
}
