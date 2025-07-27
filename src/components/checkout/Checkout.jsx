import React, { useState } from 'react';
import styles from './Checkout.module.css';

import metamaskIcon from '../../assets/icons/metamask.png';
import visaIcon from '../../assets/icons/visa.png'; // Import visa icon
import mastercardIcon from '../../assets/icons/mastercard.png'; // Import mastercard icon
import CreditCardForm from './CreditCardForm';
import MetaMaskForm from './MetaMaskForm';
import { useQuiz } from '@/context/QuizContext';
import { getObjectData } from '@/config/objectsConfig';

const Checkout = ({
    itemTitle, // Keep as optional override
    priceUSD, // Keep as optional override
    priceCrypto, // Keep as optional override
    cryptoSymbol, // Keep as optional override
    onClose
}) => {
    const { quizResults, selectedObjectType } = useQuiz();

    // Determine current clothing type based on quiz results
    const getCurrentClothingType = () => {
        // If selectedObjectType is available, use it
        if (selectedObjectType) return selectedObjectType;

        // Otherwise determine from quiz results
        if (!quizResults) return 'warrior';

        const { background, flow } = quizResults;

        if (background === 'FIBER GRID') {
            if (flow === 'LOOSE FLOW') return 'animal';
            if (flow === 'PIERCING FORM') return 'warrior';
            if (flow === 'SOFT CLUSTER') return 'eternal_child';
        } else if (background === 'CORAL FRAME') {
            if (flow === 'LOOSE FLOW') return 'rubel';
            if (flow === 'PIERCING FORM') return 'diva';
            if (flow === 'SOFT CLUSTER') return 'caretaker';
        } else if (background === 'SKELTAL BLOOM') {
            if (flow === 'LOOSE FLOW') return 'mask';
            if (flow === 'PIERCING FORM') return 'ruler';
            if (flow === 'SOFT CLUSTER') return 'Voids';
        }

        return 'warrior'; // Default fallback
    };

    // Get current clothing data dynamically
    const currentClothingType = getCurrentClothingType();
    const currentClothingData = getObjectData(currentClothingType);

    // Use dynamic data or fallback to props/defaults
    const dynamicItemTitle = itemTitle || `[01]OF ${currentClothingData?.clothingName?.toUpperCase() || 'WARRIOR ARMOR'}`;
    const dynamicPriceUSD = priceUSD || currentClothingData?.price?.usd || 38;
    const dynamicPriceCrypto = priceCrypto || currentClothingData?.price?.crypto || 0.014;
    const dynamicCryptoSymbol = cryptoSymbol || currentClothingData?.price?.cryptoSymbol || 'ETH';
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [isCardFormVisible, setIsCardFormVisible] = useState(false);
    const [isMetaMaskFormVisible, setIsMetaMaskFormVisible] = useState(false);

    // Handle method change from forms
    const handleChangeMethod = () => {
        setIsCardFormVisible(false);
        setIsMetaMaskFormVisible(false);
        setSelectedMethod(null);
    };

    // Handle payment method selection
    const handleMethodSelect = (method) => {
        setSelectedMethod(method);
        if (method === 'card') {
            setIsCardFormVisible(true);
            setIsMetaMaskFormVisible(false);
        } else if (method === 'metamask') {
            setIsMetaMaskFormVisible(true);
            setIsCardFormVisible(false);
        }
    };

    // Handle close button click
    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className={styles.checkoutContainer}>
            {/* Header - close button is always visible */}
            <div className={styles.header}>
                <h1 className={styles.title}>CHECKOUT</h1>
                <button
                    className={styles.closeBtn}
                    onClick={handleClose}
                >
                    [X]
                </button>
            </div>

            {/* Item information row */}
            <div className={styles.itemRow}>
                <p className={styles.itemTitle}>{dynamicItemTitle}</p>
                <div className={styles.itemPrice}>
                    <span className={styles.eth}>
                        {dynamicPriceCrypto} {dynamicCryptoSymbol}
                    </span>
                    <span className={styles.usd}>${dynamicPriceUSD}</span>
                </div>
            </div>

            {/* Price separator line */}
            <div className={styles.separator} />

            {/* Total price row */}
            <div className={styles.totalRow}>
                <span className={styles.totalLabel}>TOTAL</span>
                <div className={styles.itemPrice}>
                    <span className={styles.eth}>
                        {dynamicPriceCrypto} {dynamicCryptoSymbol}
                    </span>
                    <span className={styles.usd}>${dynamicPriceUSD}</span>
                </div>
            </div>

            {/* Conditional rendering based on selected payment method */}
            {isCardFormVisible ? (
                <CreditCardForm
                    amountUSD={dynamicPriceUSD}
                    onChangeMethod={handleChangeMethod}
                />
            ) : isMetaMaskFormVisible ? (
                <MetaMaskForm
                    amountETH={dynamicPriceCrypto}
                    cryptoSymbol={dynamicCryptoSymbol}
                    onChangeMethod={handleChangeMethod}
                />
            ) : (
                <>
                    {/* Payment method selection label */}
                    <div className={styles.paymentLabel}>PAYMENT METHOD</div>

                    {/* Credit/Debit card payment option */}
                    <div
                        className={`${styles.paymentOption} ${selectedMethod === 'card' ? styles.selected : ''}`}
                        onClick={() => handleMethodSelect('card')}
                    >
                        {/* Replace emoji with card icons */}
                        <div className={styles.cardIcons}>
                            <img src={visaIcon} alt="Visa" className={styles.cardIcon} />
                            <img src={mastercardIcon} alt="MasterCard" className={styles.cardIcon} />
                        </div>
                        <span className={styles.paymentText}>DEBIT/ CREDIT CARD</span>
                        <div className={styles.radioOuter}>
                            {selectedMethod === 'card' && <div className={styles.radioInner} />}
                        </div>
                    </div>

                    {/* MetaMask payment option */}
                    <div
                        className={`${styles.paymentOption} ${selectedMethod === 'metamask' ? styles.selected : ''}`}
                        onClick={() => handleMethodSelect('metamask')}
                    >
                        <img className={styles.metamaskIcon} src={metamaskIcon} alt="MetaMask" />
                        <span className={styles.paymentText}>METAMASK</span>
                        <div className={styles.radioOuter}>
                            {selectedMethod === 'metamask' && <div className={styles.radioInner} />}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Checkout;