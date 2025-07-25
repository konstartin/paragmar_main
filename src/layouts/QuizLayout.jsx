import React, { useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import soundFile from '../assets/mp3/backgroundSound.mp3?url';
import styles from './QuizLayout.module.css';


export default function QuizLayout() {
  const { isSoundOn } = useQuiz();
  const audioRef = useRef(null);

  useEffect(() => {
  if (!audioRef.current) return;

  if (isSoundOn) {
    audioRef.current.play().catch(() => {});
  } else {
    audioRef.current.pause();
  }
  }, [isSoundOn]);

   const handleInitialPlay = () => {
    if (isSoundOn && audioRef.current?.paused) {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={soundFile} loop />
      <main className={styles.layoutContainer} onClick={handleInitialPlay}>
        <Outlet />
      </main>
    </>
  );
}