
// export default DressBuyPage;
import React from 'react';
import styles from './DressBuyPage.module.css';

import ExtendHeader from '@/components/Headers/ExtendHeader';
import ProductInfo from '@/components/dress-buy/ProductInfo';
import ProductViewer from '@/components/dress-buy/ProductViewer';
import PurchaseActions from '@/components/dress-buy/PurchaseActions';
import { useQuiz } from '@/context/QuizContext';

const DressBuyPage = () => {
  const { selectedBackground } = useQuiz();

  return (
    <div className={styles.pageContainer}>
     
      <div className={`${styles.bgLayer} ${selectedBackground}`} />

      <header className={styles.headerArea}>
        <ExtendHeader />
      </header>

      <section className={styles.infoArea}>
        <ProductInfo />
      </section>

      <main className={styles.viewerArea}>
        <ProductViewer />
      </main>

      <footer className={styles.actionsArea}>
        <PurchaseActions />
      </footer>
    </div>
  );
};

export default DressBuyPage;
