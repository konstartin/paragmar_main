
import React from 'react';
import ExtandHeader from '@/components/Headers/ExtendHeader';
import ProductViewer from '@/components/dress-buy/ProductViewer';
import styles from './CompletePurchase.module.css';
import { useQuiz } from '@/context/QuizContext';
import downladIcon from '@/assets/icons/download.svg';
import shareIcon from '@/assets/icons/share.svg';

const CompletePurchase = () => {
    const {  setViewMode, getProduct } = useQuiz();
    setViewMode('3d');
    const currentClothingData = getProduct();
    console.log('Current Clothing Data:', currentClothingData);

    return (
        <div className={styles.pageContainer}>
            
                <ExtandHeader />
            

            <main className={styles.mainContent}>
                <h1 className={styles.title}>ALTER EGO ACQUIRED</h1>
                <p className={styles.subtitle}>{currentClothingData.id}</p>

                <div className={styles.modelWrapper}>
                    <ProductViewer />
                </div>

                <p className={styles.description}>
                    live your alter ego<br />on metaverse
                </p>

                
            </main>

            <footer className={styles.footer}>
                <div className={styles.leftText}>
                    Access key delivered.<br />
                    Check your inbox — your [01]of outfit now belongs to you.
                </div>
                <button className={styles.goButton}>GO!</button>
                <div className={styles.rightSection}>
                    <div className={styles.rightItem}>

                        <img src={downladIcon} alt="Download Icon" className={styles.icon} />
                        <span className={styles.rightText}>download 3d file</span>
                    </div>
                    <div className={styles.rightItem}>
                        <img src={shareIcon} alt="Share Icon" className={styles.icon} />
                        <span className={styles.rightText}>share your alter</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CompletePurchase;
