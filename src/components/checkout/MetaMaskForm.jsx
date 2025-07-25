import React, { useState } from 'react';
import styles from './MetaMaskForm.module.css';

const MetaMaskForm = ({ amountETH = 0.014, cryptoSymbol = 'ETH', onPay, onChangeMethod }) => {
    // Pre-filled Ethereum address as shown in the design
    const [ethereumAddress, setEthereumAddress] = useState('1BMLTXMEVE99TMHJFSZJHQH');

    const handleAddressChange = (e) => {
        setEthereumAddress(e.target.value);
    };

    const handleSubmit = () => {
        const paymentData = {
            address: ethereumAddress,
            amount: amountETH,
            currency: cryptoSymbol
        };

        if (onPay) onPay(paymentData);
        else console.log("Paying with MetaMask:", paymentData);
    };

    const handleChangeMethod = () => {
        if (onChangeMethod) onChangeMethod();
    };

    return (
        <div className={styles.metamaskFormWrapper}>
            {/* Payment Method label */}
            <div className={styles.paymentMethodLabel}>PAYMENT METHOD</div>

            {/* Header with selected method and change button */}
            <div className={styles.methodHeader}>
                <div className={styles.methodInfo}>
                    <div className={styles.metamaskIcon}>🦊</div>
                    <span className={styles.methodText}>METAMASK</span>
                </div>
                <button
                    className={styles.changeButton}
                    onClick={handleChangeMethod}
                >
                    CHANGE
                </button>
            </div>

            {/* MetaMask form container */}
            <div className={styles.metamaskFormContainer}>
                <div className={styles.inputWrapper}>
                    <div className={styles.inputContainer}>
                        <span className={styles.inlineLabel}>ETHEREUM ADDRESS</span>
                        <input
                            type="text"
                            name="address"
                            className={styles.inputField}
                            value={ethereumAddress}
                            onChange={handleAddressChange}
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
                    PAY {amountETH}{cryptoSymbol}
                </button>

            </div>

        </div>


    );
};

export default MetaMaskForm;