import React from 'react';
import styles from './PriceDisplay.module.css';
import layerHSvg from '@/assets/questions/Layer_H.svg';
import diamondSvg from '@/assets/icons/Group_97.svg';

const PriceDisplay = ({
    priceUSD = 155,
    priceETH = 0.51,
    cryptoSymbol = 'ETH'
}) => {
    return (
        <div className={styles.priceContainer}>
            <div className={styles.priceSection}>
                <span className={styles.usdPrice}>{priceUSD}$</span>
                <span className={styles.separator}>/</span>
                <span className={styles.ethPrice}>{priceETH}</span>
                <img src={diamondSvg} alt="diamond" className={styles.diamondSvg} />
            </div>
            <img src={layerHSvg} alt="separator" className={styles.separatorLine} />
        </div>
    );
};

export default PriceDisplay;