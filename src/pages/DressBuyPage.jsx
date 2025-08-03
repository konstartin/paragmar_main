import React, { useState, useEffect } from 'react';
import styles from './DressBuyPage.module.css';

import ExtendHeader from '@/components/Headers/ExtendHeader';
import ProductInfo from '@/components/dress-buy/ProductInfo';
import ProductViewer from '@/components/dress-buy/ProductViewer';
import PurchaseActions from '@/components/dress-buy/PurchaseActions';
import LooksGoodButton from '@/components/dress-buy/LooksGoodButton';
import PriceDisplay from '@/components/dress-buy/PriceDisplay';
import Checkout from '@/components/checkout/Checkout';
import { useQuiz } from '@/context/useQuiz.js';
import { getObjectData } from '@/config/objectsConfig';
import layerHSvg from '@/assets/questions/Layer_H.svg';

const DressBuyPage = () => {
  const { selectedBackground, getProduct,setViewMode } = useQuiz();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const currentClothingData = getProduct();

  
  const clothingInfo = {
    clothingName: currentClothingData?.clothingName || 'Unknown Item',
    priceUSD: currentClothingData?.price?.usd || 0,
    priceETH: currentClothingData?.price?.crypto || 0,
    cryptoSymbol: currentClothingData?.price?.cryptoSymbol || 'ETH'
  };


   useEffect(() => {
    setViewMode('animation'); 
  }, []);

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
        <ExtendHeader backPath='/dress'  />
      </header>

      {/* Left text section*/}
      <section className={styles.infoArea}>
        <div className={`${styles.productInfoWrapper} ${isCheckoutOpen ? styles.fadeOut : ''}`}>
          <ProductInfo clothingName={clothingInfo.clothingName} />
        </div>
      </section>

      {/* 3D Viewer - with slide left animation when checkout opens */}
      <main className={`${styles.viewerArea} ${isCheckoutOpen ? styles.slideLeft : ''}`}>
        <ProductViewer  />
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
          <img src={layerHSvg} alt="Layer H" className={styles.separatorLine} />
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