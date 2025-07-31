
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WelcomePage.module.css';
import { useProgressAnimation } from '../hooks/useProgressAnimation';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
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

// --- Main Page Component ---
export default function WelcomePage() {
    const navigate = useNavigate();

    // Constants for the text blocks
    const FIRST_TEXT = "//YOU'RE ABOUT TO UNCOVER THE HIDDEN\nALTER EGO THAT LIVES BENEATH YOUR\nSURFACE — AND RECEIVE A ONE OF A KIND\nOUTFIT CRAFTED FROM ITS ESSENCE.";
    const SECOND_TEXT = "//FIND A QUIET SPACE WHERE YOU FEEL\nSAFE. PUT ON YOUR HEADPHONES. BE\nHONEST AND LET YOUR INSTINCTS LEAD.";

    // State Management
    const [currentScreen, setCurrentScreen] = useState('loading');
    const [typingStage, setTypingStage] = useState(1);
    const [textForTyping, setTextForTyping] = useState('');
    const [isHeadphonesVisible, setIsHeadphonesVisible] = useState(false);
    const [isHeadphonesPulsing, setIsHeadphonesPulsing] = useState(false);
    const [isTypingFinished, setIsTypingFinished] = useState(false);

    const handleProgressComplete = useCallback(() => {
        setTimeout(() => {
            setCurrentScreen('typing');
            setTextForTyping(FIRST_TEXT);
        }, 1000);
    }, []);

    const handleTypingComplete = useCallback(() => {
        if (typingStage === 1) {
            setTimeout(() => {
                setIsHeadphonesVisible(true);
                setIsHeadphonesPulsing(true);
                setTextForTyping(SECOND_TEXT);
                setTypingStage(2);
            }, 1500);
        } else {
            setTimeout(() => {
                setIsHeadphonesPulsing(false);
                setIsTypingFinished(true);
            }, 500);
        }
    }, [typingStage]);

    const progress = useProgressAnimation({
        duration: 3000,
        onComplete: handleProgressComplete,
    });

    const typedText = useTypingAnimation({
        textToType: textForTyping,
        onComplete: handleTypingComplete,
    });

    return (
        <div className={styles.loader}>
            {currentScreen === 'loading' && <LoadingView progress={progress} />}

            {currentScreen === 'typing' && (
                <>
                    <img
                        src={headphonesIcon}
                        className={`
                            ${styles.headphonesIcon} 
                            ${isHeadphonesVisible ? styles.visible : ''} 
                            ${isHeadphonesPulsing ? styles.pulsing : ''}
                        `}
                        alt="Headphones Icon"
                    />

                    <div className={styles.typingText}>
                        <span dangerouslySetInnerHTML={{ __html: typedText.replace(/\n/g, '<br>') + (!isTypingFinished ? `<span class="${styles.pulse}">|</span>` : '') }} />
                    </div>

                    {isTypingFinished && (
                        <div className={styles.buttonContainer}>
                            <SelectionButton
                                onClick={() => navigate('/question/1')}
                                text="START JOURNEY"
                            />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}