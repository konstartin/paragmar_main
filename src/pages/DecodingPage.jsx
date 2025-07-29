
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import ExtendedHeader from '@/components/Headers/ExtendHeader';
import styles from './DecodingPage.module.css';

export default function DecodingPage() {
  const { selectedBackground } = useQuiz();

  return (
    <div className={`${styles.pageContainer} ${selectedBackground}`}>
      <div className={styles.headerPlacement}>
        <ExtendedHeader />
      </div>

      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
}