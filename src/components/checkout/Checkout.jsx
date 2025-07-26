import React, { useState } from 'react';
import styles from './Checkout.module.css';

import metamaskIcon from '../../assets/icons/metamask.png';
import visaIcon from '../../assets/icons/visa.png'; // Добавляем импорт
import mastercardIcon from '../../assets/icons/mastercard.png'; // Добавляем импорт
import CreditCardForm from './CreditCardForm';
import MetaMaskForm from './MetaMaskForm';

const Checkout = ({
    itemTitle = '[01]OF WARRIOR ARMOR',
    priceUSD = 38,
    priceCrypto = 0.014,
    cryptoSymbol = 'ETH',
    onClose
}) => {
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
            {/* Кнопка ВСЕГДА видна в заголовке */}
            <div className={styles.header}>
                <h1 className={styles.title}>CHECKOUT</h1>
                <button
                    className={styles.closeBtn}
                    onClick={handleClose}
                >
                    [X]
                </button>
            </div>

            <div className={styles.itemRow}>
                <p className={styles.itemTitle}>{itemTitle}</p>
                <div className={styles.itemPrice}>
                    <span className={styles.eth}>
                        {priceCrypto} {cryptoSymbol}
                    </span>
                    <span className={styles.usd}>${priceUSD}</span>
                </div>
            </div>

            <div className={styles.separator} />

            <div className={styles.totalRow}>
                <span className={styles.totalLabel}>TOTAL</span>
                <div className={styles.itemPrice}>
                    <span className={styles.eth}>
                        {priceCrypto} {cryptoSymbol}
                    </span>
                    <span className={styles.usd}>${priceUSD}</span>
                </div>
            </div>

            {isCardFormVisible ? (
                <CreditCardForm
                    amountUSD={priceUSD}
                    onChangeMethod={handleChangeMethod}
                />
            ) : isMetaMaskFormVisible ? (
                <MetaMaskForm
                    amountETH={priceCrypto}
                    cryptoSymbol={cryptoSymbol}
                    onChangeMethod={handleChangeMethod}
                />
            ) : (
                <>
                    <div className={styles.paymentLabel}>PAYMENT METHOD</div>

                    <div
                        className={`${styles.paymentOption} ${selectedMethod === 'card' ? styles.selected : ''}`}
                        onClick={() => handleMethodSelect('card')}
                    >
                        {/* ЗАМЕНЯЕМ эмоджи на иконки */}
                        <div className={styles.cardIcons}>
                            <img src={visaIcon} alt="Visa" className={styles.cardIcon} />
                            <img src={mastercardIcon} alt="MasterCard" className={styles.cardIcon} />
                        </div>
                        <span className={styles.paymentText}>DEBIT/ CREDIT CARD</span>
                        <div className={styles.radioOuter}>
                            {selectedMethod === 'card' && <div className={styles.radioInner} />}
                        </div>
                    </div>

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