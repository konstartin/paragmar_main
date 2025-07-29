import React, { useEffect } from 'react';
import ExtendHeader from '@/components/Headers/ExtendHeader';
import ModelViewer from '@/components/dress/ModelViewer';
import ModelDescription from '@/components/dress/ModelDescription';
import { useQuiz } from '@/context/QuizContext';
import styles from './DressPage.module.css';


const DressPage = () => {
  const { selectedBackground } = useQuiz();

  useEffect(() => {
    const soundTimer = setTimeout(() => {
      if (window.playSound) {
        console.log('Playing dress sound...');
        window.playSound('dressSound');
      } else {
        console.log('playSound not available');
      }
    }, 1000);

    return () => clearTimeout(soundTimer);
  }, []);


  return (
    <div className={`${styles.pageContainer} ${selectedBackground}`}>
      <div className={styles.headerPlacement}>
        <ExtendHeader backPath="/decoding" />
      </div>

      <main className="main-content">
        <div className={styles.modelViewerContainer}>
          <ModelViewer />
        </div>
        <div className={styles.modelDescriptionContainer}>
          <ModelDescription />
        </div>
      </main>
    </div>
  );
};

export default DressPage;