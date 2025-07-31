import React, { useState } from 'react';
import styles from './CreditCardForm.module.css';
import visaIcon from '../../assets/icons/visa.png';
import mastercardIcon from '../../assets/icons/mastercard.png';
import { useNavigate } from 'react-router-dom';


const CreditCardForm = ({ amountUSD = 38, onPay, onChangeMethod }) => {
    // Pre-filled card data with EMAIL field
    const navigate = useNavigate();
    const [cardData, setCardData] = useState({
        number: '5326 1152 2234 6448',
        expiry: '02/29',
        cvv: '265',
        name: 'ORIEL REISS',
        email: 'ORIELREISS@GMAIL.COM',
    });

    const handleChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (onPay) onPay(cardData);
        else console.log("Paying with card:", cardData);
        navigate('/purchasecomplete');
    };


    const handleChangeMethod = () => {
        if (onChangeMethod) onChangeMethod();
    };

    return (
        <div className={styles.cardFormWrapper}>
            <div className={styles.paymentMethodLabel}>PAYMENT METHOD</div>

            <div className={styles.methodHeader}>
                <div className={styles.methodInfo}>
                    {/* ЗАМЕНЯЕМ эмоджи на иконки */}
                    <div className={styles.cardIcons}>
                        <img src={visaIcon} alt="Visa" className={styles.cardIcon} />
                        <img src={mastercardIcon} alt="MasterCard" className={styles.cardIcon} />
                    </div>
                    <span className={styles.methodText}>DEBIT/ CREDIT CARD</span>
                </div>
                <button
                    className={styles.changeButton}
                    onClick={handleChangeMethod}
                >
                    CHANGE
                </button>
            </div>

            {/* Остальной код остается без изменений */}
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

                <div className={styles.inputWrapper}>
                    <div className={styles.inputContainer}>
                        <span className={styles.inlineLabel}>EMAIL ADDRESS</span>
                        <input
                            type="email"
                            name="email"
                            className={styles.inputField}
                            value={cardData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div>
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