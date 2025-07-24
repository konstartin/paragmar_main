import React from 'react';
import ExtendHeader from '@/components/Headers/ExtendHeader'; 
import ModelViewer from '@/components/dress/ModelViewer';
import ModelDescription from '@/components/dress/ModelDescription';
import { useQuiz } from '@/context/QuizContext';
import styles from './DressPage.module.css';


const DressPage = () => {
      const { selectedBackground } = useQuiz();
  return (
    <div className={`${styles.pageContainer} ${selectedBackground}`}>
          <div className={styles.headerPlacement}>
            <ExtendHeader backPath="/decoding"/>
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