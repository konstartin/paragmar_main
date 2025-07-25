import React, { useState } from 'react';
import styles from './CreditCardForm.module.css';

const CreditCardForm = ({ amountUSD = 38, onPay, onChangeMethod }) => {
    // Pre-filled card data as shown in the design
    const [cardData, setCardData] = useState({
        number: '5326 1152 2234 6448',
        expiry: '02/29',
        cvv: '265',
        name: 'ORIEL REISS',
    });

    const handleChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (onPay) onPay(cardData);
        else console.log("Paying with card:", cardData);
    };

    const handleChangeMethod = () => {
        if (onChangeMethod) onChangeMethod();
    };

    return (
        <div className={styles.cardFormWrapper}>
            {/* Payment Method label */}
            <div className={styles.paymentMethodLabel}>PAYMENT METHOD</div>

            {/* Header with selected method and change button */}
            <div className={styles.methodHeader}>
                <div className={styles.methodInfo}>
                    <div className={styles.visaIcon}>💳</div>
                    <span className={styles.methodText}>DEBIT/ CREDIT CARD</span>
                </div>
                <button
                    className={styles.changeButton}
                    onClick={handleChangeMethod}
                >
                    CHANGE
                </button>
            </div>

            {/* Card form container */}
            <div className={styles.cardFormContainer}>
                <div className={styles.inputWrapper}>
                    <div className={styles.inputContainer}>
                        <span className={styles.inlineLabel}>CARD NUMBER</span>
                        <input
                            type="text"
                            name="number"
                            className={styles.inputField}
                            value={cardData.number}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <div className={styles.inputWrapper}>
                        <div className={styles.inputContainer}>
                            <span className={styles.inlineLabel}>MM/YY</span>
                            <input
                                type="text"
                                name="expiry"
                                className={styles.inputField}
                                value={cardData.expiry}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles.inputWrapper}>
                        <div className={styles.inputContainer}>
                            <span className={styles.inlineLabel}>CVV</span>
                            <input
                                type="text"
                                name="cvv"
                                className={styles.inputField}
                                value={cardData.cvv}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.inputWrapper}>
                    <div className={styles.inputContainer}>
                        <span className={styles.inlineLabel}>CARDHOLDER NAME</span>
                        <input
                            type="text"
                            name="name"
                            className={styles.inputField}
                            value={cardData.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>

            </div>
            <div>

                {/* Pay button */}
                <button
                    className={styles.payButton}
                    onClick={handleSubmit}
                >
                    PAY {amountUSD}$
                </button>

            </div>

        </div>
    );
};

export default CreditCardForm;