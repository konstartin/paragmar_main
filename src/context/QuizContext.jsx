
import React, { createContext, useState, useContext } from 'react'

const QuizContext = createContext()

export function QuizProvider({ children }) {
  const [selectedBackground, setSelectedBackground] = useState(null)
  const [isSoundOn, setIsSoundOn] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  const saveAnswer = (questionIndex, answer) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: answer }))
  }

  const next = () => {
    setCurrentIndex((prev) => prev + 1)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const goto = (index) => {
    setCurrentIndex(index)
  }

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
  }

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

export function useQuiz() {
  return useContext(QuizContext)
}
