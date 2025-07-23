import React from 'react';
import styles from './DecodingContent.module.css';

export default function DecodingContent() {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <div className={styles.leftNumber}>
          //01
                </div>
                <div className={styles.leftCategory}>
                    OCEAN
                </div>
            </div>

            <div className={styles.centerSection}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>DECODING</div>
                    <div className={styles.title}>ALTEREGO</div>
                </div>
                <div className={styles.description}>
                    HOLD TIGHT WHILE WE<br />
                    UNCOVER YOUR HIDDEN SELF
                </div>
            </div>

            <div className={styles.rightSection}>
                <div className={styles.rightNumber}>
          //02
                </div>
                <div className={styles.rightCategory}>
                    OCEAN
                </div>
            </div>
        </div>
    );
}