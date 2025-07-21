// import React, { useState, useRef, useEffect } from 'react';
// import styles from './SoundButton.module.css';
// import soundFile from '../../../assets/questions/backgroundSound.mp3';
// import soundGif from '../../../assets/questions/soundOn.gif';

// export default function SoundButton() {
//     const [isSoundOn, setIsSoundOn] = useState(true);
//     const audioRef = useRef(null);

//     const toggleSound = () => {
//         setIsSoundOn(prevState => !prevState);
//     };

//     useEffect(() => {
//         if (audioRef.current) {
//             if (isSoundOn) {
//                 audioRef.current.play().catch(error => console.log("Audio play was prevented.", error));
//             } else {
//                 audioRef.current.pause();
//             }
//         }
//     }, [isSoundOn]);

//     return (
//         <div className={styles.soundButtonContainer}>
//             <audio ref={audioRef} src={soundFile} loop />
//             <button onClick={toggleSound} className={styles.onButton}>
//                 ON
//             </button>
//             {isSoundOn && (
//                 <img src={soundGif} alt="Sound is on" className={styles.soundGif} />
//             )}
//         </div>
//     );
// }
import React from 'react';
import styles from './SoundButton.module.css';
import soundGif from '@/assets/questions/soundOn.gif';
import { useQuiz } from '@/context/QuizContext';

export default function SoundButton() {
    const { isSoundOn, setIsSoundOn } = useQuiz();

    const toggleSound = () => {
        setIsSoundOn(prevState => !prevState);
    };

    return (
        <div className={styles.soundButtonContainer}>
            <button onClick={toggleSound} className={styles.onButton}>
                ON
            </button>
            {isSoundOn && (
                <img src={soundGif} alt="Sound is on" className={styles.soundGif} />
            )}
        </div>
    );
}