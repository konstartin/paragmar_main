
// import React, { useState, useEffect, useMemo } from 'react';
// import { useQuiz } from '@/context/QuizContext';
// import { useNavigate } from 'react-router-dom';
// import styles from './DecodingContent.module.css';

// const TYPING_SPEED_MS = 30;
// const PAUSE_BETWEEN_LINES_MS = 500; 

// export default function DecodingContent() {
//   const { determineAndSetProduct, answers } = useQuiz();
//   const navigate = useNavigate();

//   const [leftText, setLeftText] = useState({ number: '', category: '' });
//   const [rightText, setRightText] = useState({ number: '', category: '' });
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const answerList = useMemo(() => {
//     return Object.entries(answers)
//       .map(([index, data]) => ({
//         questionIndex: parseInt(index, 10),
//         label: data.label,
//       }))
//       .sort((a, b) => a.questionIndex - b.questionIndex);
//   }, [answers]);

//   useEffect(() => {
    
//     // if (currentIndex >= answerList.length) {
//     //   const finalNavigationTimeout = setTimeout(() => {
//     //     determineAndSetProduct?.();
//     //     navigate('showproduct');
//     //   }, PAUSE_BETWEEN_LINES_MS);
//     //   return () => clearTimeout(finalNavigationTimeout);
//     // }

//     // --- NEW LOGIC: GET A PAIR OF ANSWERS ---
//     // The first in the pair is always the ODD one (1, 3, etc.) -> goes to the RIGHT
//     const oddAnswer = answerList[currentIndex];
//     // The second in the pair is always the EVEN one (2, 4, etc.) -> goes to the LEFT
//     const evenAnswer = answerList[currentIndex + 1];

//     // Prepare text for the RIGHT side (always exists in a pair)
//     const rightQuestionNumber = oddAnswer.questionIndex ;
//     const fullRightNumberText = `//${String(rightQuestionNumber).padStart(2, '0')}`;
//     const fullRightCategoryText = oddAnswer.label;

//     // Prepare text for the LEFT side (might not exist if there's an odd number of total questions)
//     let fullLeftNumberText = '';
//     let fullLeftCategoryText = '';
//     if (evenAnswer) {
//       const leftQuestionNumber = evenAnswer.questionIndex ;
//       fullLeftNumberText = `//${String(leftQuestionNumber).padStart(2, '0')}`;
//       fullLeftCategoryText = evenAnswer.label;
//     }

//     let charIndex = 0;
//     let typingInterval;
//     let nextStepTimeout;

//     // Start the typing animation for both sides at once
//     typingInterval = setInterval(() => {
//       // Slices for the right side
//       const rightNumSlice = fullRightNumberText.slice(0, charIndex);
//       const rightCatSlice = fullRightCategoryText.slice(0, charIndex);
//       // Slices for the left side
//       const leftNumSlice = fullLeftNumberText.slice(0, charIndex);
//       const leftCatSlice = fullLeftCategoryText.slice(0, charIndex);

//       // Update both states simultaneously
//       setRightText({ number: rightNumSlice, category: rightCatSlice });
//       setLeftText({ number: leftNumSlice, category: leftCatSlice });

//       // Check if the longest possible string has finished typing
//       const isTypingComplete = charIndex > Math.max(
//         fullRightNumberText.length,
//         fullRightCategoryText.length,
//         fullLeftNumberText.length,
//         fullLeftCategoryText.length
//       );

//       if (isTypingComplete) {
//         clearInterval(typingInterval);
        
//         // Set a timeout to clear the text and move to the next PAIR
//         nextStepTimeout = setTimeout(() => {
//           setLeftText({ number: '', category: '' });
//           setRightText({ number: '', category: '' });
//           // --- NEW LOGIC: JUMP BY 2 TO GET TO THE NEXT PAIR ---
//           setCurrentIndex(prev => prev + 2);
//         }, PAUSE_BETWEEN_LINES_MS);
//       }
      
//       charIndex++;

//     }, TYPING_SPEED_MS);

//     // Cleanup function to prevent memory leaks
//     return () => {
//       clearInterval(typingInterval);
//       clearTimeout(nextStepTimeout);
//     };
//   }, [currentIndex, answerList, determineAndSetProduct, navigate]);

//   return (
//     <div className={styles.container}>
//       {/* Left side for EVEN numbers */}
//       <span className={`${styles.leftNumber} ${styles.typingEffect}`}>{leftText.number}</span>
//       <span className={`${styles.leftCategory} ${styles.typingEffect}`}>{leftText.category}</span>

//       <section className={styles.centerSection}>
//         <div className={styles.titleContainer}>
//           <h1 className={styles.title}>DECODING</h1>
//           <h1 className={styles.title}>ALTEREGO</h1>
//         </div>
//       </section>

//       {/* Right side for ODD numbers */}
//       <span className={`${styles.rightCategory} ${styles.typingEffect}`}>{rightText.category}</span>
//       <span className={`${styles.rightNumber} ${styles.typingEffect}`}>{rightText.number}</span>

//       <p className={styles.description}>
//         HOLD TIGHT WHILE WE<br />
//         UNCOVER YOUR HIDDEN SELF
//       </p>
//     </div>
//   );
// }
import React, { useState, useEffect, useMemo } from 'react';
import { useQuiz } from '@/context/QuizContext';
import { useNavigate } from 'react-router-dom';
import styles from './DecodingContent.module.css';

const TYPING_SPEED_MS = 30; 
const PAUSE_BETWEEN_LINES_MS = 500; 
const FINAL_PAUSE_MS = 2000; 

export default function DecodingContent() {
  const { determineAndSetProduct, answers } = useQuiz();
  const navigate = useNavigate();

  const [leftText, setLeftText] = useState({ number: '', category: '' });
  const [rightText, setRightText] = useState({ number: '', category: '' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const answerList = useMemo(() => {
    return Object.entries(answers)
      .map(([index, data]) => ({
        questionIndex: parseInt(index, 10),
        label: data.label,
      }))
      .sort((a, b) => a.questionIndex - b.questionIndex);
  }, [answers]);

  useEffect(() => {
    // Exit condition if there are no answers
    if (currentIndex >= answerList.length) {
      // This part now primarily serves as a fallback
      determineAndSetProduct?.();
      navigate('showproduct');
      return;
    }

    const oddAnswer = answerList[currentIndex];
    const evenAnswer = answerList[currentIndex + 1];

    const leftQuestionNumber = evenAnswer.questionIndex;
    const fullRightNumberText = `//${String(leftQuestionNumber).padStart(2, '0')}`;
    const fullRightCategoryText = evenAnswer.label;
    
    let fullLeftNumberText = '';
    let fullLeftCategoryText = '';
    if (evenAnswer) {
      const rightQuestionNumber = oddAnswer.questionIndex;
      fullLeftNumberText = `//${String(rightQuestionNumber).padStart(2, '0')}`;
      fullLeftCategoryText =oddAnswer.label ;
    }

    let charIndex = 0;
    let typingInterval;
    let nextStepTimeout;

    typingInterval = setInterval(() => {
      const rightNumSlice = fullRightNumberText.slice(0, charIndex);
      const rightCatSlice = fullRightCategoryText.slice(0, charIndex);
      const leftNumSlice = fullLeftNumberText.slice(0, charIndex);
      const leftCatSlice = fullLeftCategoryText.slice(0, charIndex);

      setRightText({ number: rightNumSlice, category: rightCatSlice });
      setLeftText({ number: leftNumSlice, category: leftCatSlice });

      const isTypingComplete = charIndex > Math.max(
        fullRightNumberText.length, fullRightCategoryText.length,
        fullLeftNumberText.length, fullLeftCategoryText.length
      );

      if (isTypingComplete) {
        clearInterval(typingInterval);

        // --- NEW LOGIC FOR THE FINAL STEP ---
        const isLastPair = currentIndex >= answerList.length - 2;

        if (isLastPair) {
          // This is the last pair. Do NOT clear the text.
          // Wait for the final, longer pause and then navigate.
          nextStepTimeout = setTimeout(() => {
            determineAndSetProduct?.();
            navigate('showproduct');
          }, FINAL_PAUSE_MS); // Use the new 2-second pause
        } else {
          // Not the last pair. Clear text and move to the next pair.
          nextStepTimeout = setTimeout(() => {
            setLeftText({ number: '', category: '' });
            setRightText({ number: '', category: '' });
            setCurrentIndex(prev => prev + 2);
          }, PAUSE_BETWEEN_LINES_MS);
        }
      }
      
      charIndex++;
    }, TYPING_SPEED_MS);

    // Cleanup function
    return () => {
      clearInterval(typingInterval);
      clearTimeout(nextStepTimeout);
    };
  }, [currentIndex, answerList, determineAndSetProduct, navigate]);

  return (
    <div className={styles.container}>
      {/* Left side for EVEN numbers */}
      <span className={`${styles.leftNumber} ${styles.typingEffect}`}>{leftText.number}</span>
      <span className={`${styles.leftCategory} ${styles.typingEffect}`}>{leftText.category}</span>

      <section className={styles.centerSection}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>DECODING</h1>
          <h1 className={styles.title}>ALTEREGO</h1>
        </div>
      </section>

      {/* Right side for ODD numbers */}
      <span className={`${styles.rightCategory} ${styles.typingEffect}`}>{rightText.category}</span>
      <span className={`${styles.rightNumber} ${styles.typingEffect}`}>{rightText.number}</span>

      <p className={styles.description}>
        HOLD TIGHT WHILE WE<br />
        UNCOVER YOUR HIDDEN SELF
      </p>
    </div>
  );
}