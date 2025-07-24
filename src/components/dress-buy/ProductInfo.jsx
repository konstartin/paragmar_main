
import React, { useState } from 'react';
import styles from './ProductInfo.module.css';
import { useQuiz } from '@/context/QuizContext';
import AccordionItem from './AccordionItem';

const ProductInfo = () => {
    const { getProduct, viewMode, setViewMode } = useQuiz();
    const productData = getProduct() || { title: 'CHILDHOOD ECHO' };

    const [openSection, setOpenSection] = useState('description');

    const handleToggle = (sectionName) => {
        setOpenSection(prevOpenSection => 
            prevOpenSection === sectionName ? null : sectionName
        );
    };

    if (!productData) {
        return <div className={styles.infoContainer}>Loading...</div>;
    }

    return (
        <div className={styles.infoContainer}>
            <h1 className={styles.title}>{productData.title}</h1>

            <div className={styles.viewButtons}>
                <button 
                    className={`${styles.button} ${viewMode !== 'animation' ? styles.inactive : ''}`}
                    onClick={() => setViewMode('animation')}
                >
                    ANIMATION
                </button>
                <button 
                    className={`${styles.button} ${viewMode !== '3d' ? styles.inactive : ''}`}
                    onClick={() => setViewMode('3d')}
                >
                    3D VIEW
                </button>
            </div>

            <div className={styles.accordionContainer}>
                <AccordionItem 
                    title="DESCRIPTION"
                    content={productData.description}
                    isOpen={openSection === 'description'}
                    onToggle={() => handleToggle('description')}
                />
                <AccordionItem 
                    title="FORMAT"
                    content={productData.format}
                    isOpen={openSection === 'format'}
                    onToggle={() => handleToggle('format')}
                />
                <AccordionItem 
                    title="TECHNICAL SPECS"
                    content={productData['technical specs']}
                    isOpen={openSection === 'technical-specs'}
                    onToggle={() => handleToggle('technical-specs')}
                />
            </div>
        </div>
    );
};

export default ProductInfo;