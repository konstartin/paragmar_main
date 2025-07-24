
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WelcomePage.module.css';
import { useProgressAnimation } from '../hooks/useProgressAnimation';
import { useTypingAnimation } from '../hooks/useTypingAnimation';

// --- Change 1: Import the reusable button ---
import SelectionButton from '../components/SelectionButton';

// Import SVGs
import FirstIcon from '../assets/loadingpage/first.svg';
import SecIcon from '../assets/loadingpage/sec.svg';
import ThirdIcon from '../assets/loadingpage/third.svg';
import FourthIcon from '../assets/loadingpage/four.svg';
import FifthIcon from '../assets/loadingpage/fift.svg';
import SixthIcon from '../assets/loadingpage/six.svg';

import headphonesIcon from '../assets/loadingpage/headphones.svg';

// --- View Component 1: Loading Screen ---
const LoadingView = ({ progress }) => (
    <div className={styles.compositionContainer}>
        <div className={styles.mainTextContainer}>
            <img src={FirstIcon} className={styles.firstIcon} alt="[" />
            <img src={SecIcon} className={styles.secIcon} alt="0" />
            <img src={ThirdIcon} className={styles.thirdIcon} alt="1" />
            <img src={FourthIcon} className={styles.fourthIcon} alt="]" />
            <img src={FifthIcon} className={styles.fifthIcon} alt="O" />
            <img src={SixthIcon} className={styles.sixthIcon} alt="F" />
        </div>
        <div className={styles.loadingText}>LOADING</div>
        <div className={styles.progressText}>[{progress.toString().padStart(2, '0')}%]</div>
        <div className={styles.trademark}>TM</div>
    </div>
);

// --- View Component 2: Typing Screen ---
const TypingView = ({ text, pulse }) => (
    <div className={styles.typingContainer}>
        <div className={styles.typingText}>
            <span dangerouslySetInnerHTML={{ __html: text + (pulse ? `<span class="${styles.pulse}">|</span>` : '') }} />
        </div>
    </div>
);

// --- View Component 3: Final Screen ---
const FinalView = ({ text, onStartClick }) => (
    <>
        <img src={headphonesIcon} className={styles.headphonesIcon} alt="Headphones Icon" />
        <div className={styles.typingText}>
            <span dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br>') }} />
        </div>
        <div className={styles.buttonContainer}>
        <SelectionButton
            onClick={onStartClick}
            text="START JOURNEY"
        />
</div>
    </>
);

// --- Main Page Component ---
export default function WelcomePage() {
    const [currentScreen, setCurrentScreen] = useState('loading'); // loading, typing1, typing2, final
    const [textForTyping, setTextForTyping] = useState('');
    
    const navigate = useNavigate();

    const handleProgressComplete = useCallback(() => {
        setTimeout(() => {
            setTextForTyping("//YOU'RE ABOUT TO UNCOVER THE HIDDEN\nALTER EGO THAT LIVES BENEATH YOUR\nSURFACE — AND RECEIVE A ONE OF A KIND\nOUTFIT CRAFTED FROM ITS ESSENCE.");
            setCurrentScreen('typing1');
        }, 1000);
    }, []);

    const handleFirstTypingComplete = useCallback(() => {
        setTimeout(() => {
            setTextForTyping("//FIND A QUIET SPACE WHERE YOU FEEL\n SAFE. PUT ON YOUR HEADPHONES. BE\nHONESTAND LET YOUR INSTINCTS LEAD.");
            setCurrentScreen('typing2');
        }, 2000);
    }, []);

    const handleSecondTypingComplete = useCallback(() => {
        setTimeout(() => {
            setCurrentScreen('final');
        }, 500);
    }, []);

    const progress = useProgressAnimation({
        duration: 3000,
        onComplete: handleProgressComplete,
    });
    
    const typedText = useTypingAnimation({
        textToType: textForTyping,
        onComplete: currentScreen === 'typing1' ? handleFirstTypingComplete : handleSecondTypingComplete,
    });
    
    return (
        <div className={styles.loader}>
            {currentScreen === 'loading' && <LoadingView progress={progress} />}
            {currentScreen === 'typing1' && <TypingView text={typedText} pulse={true} style={styles.typingView1} />}
            {currentScreen === 'typing2' && <TypingView text={typedText} pulse={true} style={styles.typingView2} />}
            {currentScreen === 'final' && <FinalView text={textForTyping} onStartClick={() => navigate('/question/1')} />}
        </div>
    );
}