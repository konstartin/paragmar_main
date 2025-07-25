import React, { useState } from 'react';
import styles from './DressBuyPage.module.css';

import ExtendHeader from '@/components/Headers/ExtendHeader';
import ProductInfo from '@/components/dress-buy/ProductInfo';
import ProductViewer from '@/components/dress-buy/ProductViewer';
import PurchaseActions from '@/components/dress-buy/PurchaseActions';
import LooksGoodButton from '@/components/dress-buy/LooksGoodButton';
import PriceDisplay from '@/components/dress-buy/PriceDisplay';
import Checkout from '@/components/checkout/Checkout';
import { useQuiz } from '@/context/QuizContext';
import { getObjectData } from '@/config/objectsConfig';

const DressBuyPage = () => {
  const { selectedBackground, getProduct } = useQuiz(); // Добавили getProduct
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Получаем текущий продукт из контекста квиза
  const productData = getProduct();

  // Определяем тип одежды на основе данных продукта
  const getCurrentClothingType = () => {
    if (!productData) return 'warrior'; // fallback

    // Ищем соответствующий ключ в конфиге по title
    const configKeys = ['warrior', 'animal', 'eternal_child', 'mask', 'ruler', 'Voids', 'rubel', 'diva', 'caretaker'];

    for (const key of configKeys) {
      const configData = getObjectData(key);
      if (configData && configData.title === productData.title) {
        return key;
      }
    }

    return 'warrior'; // fallback если не найдено
  };

  const currentClothingType = getCurrentClothingType();
  const currentClothingData = getObjectData(currentClothingType);

  // Extract pricing and info from config
  const clothingInfo = {
    clothingName: currentClothingData?.clothingName || 'Unknown Item',
    priceUSD: currentClothingData?.price?.usd || 0,
    priceETH: currentClothingData?.price?.crypto || 0,
    cryptoSymbol: currentClothingData?.price?.cryptoSymbol || 'ETH'
  };

  // Handle "Looks Good" button click - open checkout
  const handleLooksGoodClick = () => {
    console.log('Opening checkout...');
    setIsCheckoutOpen(true);
  };

  // Handle "Start Over" button click
  const handleStartOverClick = () => {
    console.log('Start Over clicked!');
    // TODO: Add start over logic later
  };

  // Handle checkout close
  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={`${styles.bgLayer} ${selectedBackground}`} />

      <header className={styles.headerArea}>
        {/* <ExtendHeader /> */}
      </header>

      <section className={styles.infoArea}>
        <ProductInfo clothingName={clothingInfo.clothingName} />
      </section>

      <main className={styles.viewerArea}>
        <ProductViewer />
      </main>

      <footer className={styles.actionsArea}>
        <PurchaseActions />
        {/* Price and buttons */}
        <div className={styles.looksGoodContainer}>
          <PriceDisplay
            priceUSD={clothingInfo.priceUSD}
            priceETH={clothingInfo.priceETH}
            cryptoSymbol={clothingInfo.cryptoSymbol}
          />
          <LooksGoodButton
            onLooksGood={handleLooksGoodClick}
            onStartOver={handleStartOverClick}
          />
        </div>
      </footer>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className={styles.checkoutOverlay}>
          <Checkout
            itemTitle={`[01]OF ${clothingInfo.clothingName.toUpperCase()}`}
            priceUSD={clothingInfo.priceUSD}
            priceCrypto={clothingInfo.priceETH}
            cryptoSymbol={clothingInfo.cryptoSymbol}
            onClose={handleCloseCheckout}
          />
        </div>
      )}
    </div>
  );
};

export default DressBuyPage;