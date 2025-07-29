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
  const { selectedBackground, getProduct } = useQuiz();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Same logic as DressPage - that's it!
  const currentClothingData = getProduct();

  // Extract pricing and info from the SAME source as DressPage
  const clothingInfo = {
    clothingName: currentClothingData?.clothingName || 'Unknown Item',
    priceUSD: currentClothingData?.price?.usd || 0,
    priceETH: currentClothingData?.price?.crypto || 0,
    cryptoSymbol: currentClothingData?.price?.cryptoSymbol || 'ETH'
  };


  // Handle "Looks Good" button click - open checkout with animation
  const handleLooksGoodClick = () => {
    console.log('Opening checkout...');
    setIsCheckoutOpen(true);
  };

  // Handle "Start Over" button click
  const handleStartOverClick = () => {
    console.log('Start Over clicked!');
  };

  // Handle checkout close
  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className={`${styles.pageContainer}`}>

      {/* Header */}
      <header className={styles.headerArea}>
        <ExtendHeader />
      </header>

      {/* Left text section*/}
      <section className={styles.infoArea}>
        <div className={`${styles.productInfoWrapper} ${isCheckoutOpen ? styles.fadeOut : ''}`}>
          <ProductInfo clothingName={clothingInfo.clothingName} />
        </div>
      </section>

      {/* 3D Viewer - with slide left animation when checkout opens */}
      <main className={`${styles.viewerArea} ${isCheckoutOpen ? styles.slideLeft : ''}`}>
        <ProductViewer />
      </main>

      {/* Footer */}
      <footer className={styles.actionsArea}>
        <PurchaseActions />
        {/* Price and buttons */}
        <div className={`${styles.looksGoodContainer} ${isCheckoutOpen ? styles.fadeOut : ''}`}>
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
        <div className={styles.checkoutContainer}>
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