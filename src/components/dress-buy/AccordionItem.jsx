import React from 'react';
import styles from './AccordionItem.module.css';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
    return (
        <div className={styles.accordionItem}>
            <button className={styles.accordionHeader} onClick={onToggle}>
                <span>{title} </span>
                <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>
                    {'>'}
                </span>
            </button>
            {isOpen && (
                <div className={styles.accordionContent}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default AccordionItem;