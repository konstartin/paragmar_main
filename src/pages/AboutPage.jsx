
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'
import ExtendHeader from '@/components/Headers/ExtendHeader';
import styles from './AboutPage.module.css';

import FirstIcon from '../assets/loadingpage/first.svg';
import SecIcon from '../assets/loadingpage/sec.svg';
import ThirdIcon from '../assets/loadingpage/third.svg';
import FourthIcon from '../assets/loadingpage/four.svg';
import FifthIcon from '../assets/loadingpage/fift.svg';
import SixthIcon from '../assets/loadingpage/six.svg';


export default function AboutPage() {

  const indexRef = useRef(0);

   const location = useLocation();
   const previousPath = location.state?.from || '/';
   console.log('Previous path:', previousPath);
  

  return (
    <div className={styles.wrapper}>
      <ExtendHeader backPath={previousPath} />
      <div className={styles.content}>
        <div className={styles.compositionContainer}>
            <img src={FirstIcon} className={styles.firstIcon} alt="[" />
            <img src={SecIcon} className={styles.secIcon} alt="0" />
            <img src={ThirdIcon} className={styles.thirdIcon} alt="1" />
            <img src={FourthIcon} className={styles.fourthIcon} alt="]" />
            <img src={FifthIcon} className={styles.fifthIcon} alt="O" />
            <img src={SixthIcon} className={styles.sixthIcon} alt="F" />
        <div className={styles.trademark}>TM</div>
        </div>
        <p className={styles.text}>
          we are a futuristic fashion brand that brings your hidden alter ego to life. Through an immersive experience based on a Rorschach-inspired visual test, we generate a garment that’s entirely yours emotionally, energetically, and aesthetically. 
          <br /><br />We believe identity is fluid. Who you are today might not be who you are tomorrow — and that’s worth celebrating. Our site opens only from midnight to 3AM, when the world quiets down and the masks come off. That’s when you’re most likely to meet the real you.
          <br /><br />This isn’t just fashion — it’s your reflection in pixels and soul. Because there’s only one of you.

        </p>
      </div>
    </div>
  );
}