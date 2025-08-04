import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FinalPage.module.css';
import ExtendHeader from '@/components/Headers/ExtendHeader';
import { getObjectData } from '../config/objectsConfig';

export default function FinalPage() {
    const navigate = useNavigate();

    // Get alter ego from quiz results - it's stored in 'finalProductKey'
    const selectedAlterEgo = localStorage.getItem('finalProductKey') || 'warrior';

    console.log('=== QUIZ RESULT DEBUG ===');
    console.log('Final Product Key from localStorage:', selectedAlterEgo);
    console.log('Quiz Answers:', localStorage.getItem('quizAnswers'));

    // Get object data and extract video URL  
    const objectData = getObjectData(selectedAlterEgo);
    const videoUrl = objectData?.finalVideo;

    // Fallback if no video found - try warrior
    const fallbackVideoUrl = !videoUrl ? getObjectData('warrior')?.finalVideo : videoUrl;

    const fullText = "//YOU'VE ARRIVED, NOW ENJOY YOURSELF.\nREMEMBER, THERE'S NO ONE LIKE YOU";

    // State variables for typing animation
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    // Start typing animation after component loads
    useEffect(() => {
        const startTimer = setTimeout(() => {
            setIsTyping(true);
        }, 9000);

        return () => clearTimeout(startTimer);
    }, []);

    // Typing animation logic
    useEffect(() => {
        if (!isTyping || currentIndex >= fullText.length) {
            return;
        }

        const typingTimer = setTimeout(() => {
            setDisplayedText(prev => prev + fullText[currentIndex]);
            setCurrentIndex(prev => prev + 1);
        }, 80); // Typing speed - 80ms between characters

        return () => clearTimeout(typingTimer);
    }, [currentIndex, isTyping, fullText]);

    // Format text for HTML display
    const formatText = (text) => {
        return text.replace(/\n/g, '<br>');
    };


    const handleVideoEnd = () => {
        console.log('Video ended, redirecting in 2 seconds...');
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    // Handle video play - stop ALL audio on the site
    const handleVideoPlay = (event) => {
        console.log('Video started playing, stopping all site audio...');

        // Stop all HTML audio elements
        const allAudioElements = document.querySelectorAll('audio');
        allAudioElements.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
            audio.volume = 0;
            audio.muted = true;
        });

        // Stop Web Audio API contexts
        if (window.AudioContext || window.webkitAudioContext) {
            if (window.audioContext && window.audioContext.state === 'running') {
                window.audioContext.suspend();
            }
        }

        // Stop Tone.js if it's being used
        if (window.Tone && window.Tone.Transport) {
            window.Tone.Transport.stop();
            window.Tone.Transport.cancel();
        }

        // Stop any Howler.js audio if it's being used
        if (window.Howl) {
            window.Howler.stop();
            window.Howler.mute(true);
        }

        // Ensure video audio is enabled
        const video = event.target;
        video.muted = false;
        video.volume = 0.8;

        console.log(`Playing video for alter ego: ${selectedAlterEgo}`);
    };

    // Stop background audio when component mounts
    useEffect(() => {
        // Stop all site audio immediately when final page loads
        const stopAllAudio = () => {
            const allAudioElements = document.querySelectorAll('audio');
            allAudioElements.forEach(audio => {
                audio.pause();
                audio.volume = 0;
                audio.muted = true;
            });

            if (window.Howler) {
                window.Howler.stop();
            }
        };

        // Stop audio immediately and after a short delay
        stopAllAudio();
        setTimeout(stopAllAudio, 100);
        setTimeout(stopAllAudio, 500);

    }, []);

    // Debug logging
    useEffect(() => {
        console.log('=== FINAL DEBUG INFO ===');
        console.log('Selected Alter Ego (from quiz):', selectedAlterEgo);
        console.log('Object Data:', objectData);
        console.log('Video URL:', videoUrl);
        console.log('Using video URL:', fallbackVideoUrl);

        if (!objectData) {
            console.error(`❌ No object data found for alter ego: ${selectedAlterEgo}`);
        }

        if (!videoUrl) {
            console.error(`❌ No video found for alter ego: ${selectedAlterEgo}`);
            console.log('📋 Available alter egos: eternal_child, warrior, animal, mask, ruler, void, rebel, diva, caretaker');
        } else {
            console.log(`✅ Successfully loaded video for ${selectedAlterEgo}`);
        }
    }, [selectedAlterEgo, objectData, videoUrl, fallbackVideoUrl]);

    return (
        <div className={styles.pageContainer}>
            {/* Video Background */}
            <video
                className={styles.videoBackground}
                autoPlay
                playsInline
                preload="auto"
                controls={false}
                style={{ pointerEvents: 'none' }}
                onPlay={handleVideoPlay}
                onEnded={handleVideoEnd}
                onLoadedData={() => console.log('Video loaded successfully')}
                onError={(e) => console.error('Video error:', e)}
            // Audio enabled - muted removed
            >
                <source src={fallbackVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Header */}
            <header className={styles.headerArea}>
                <ExtendHeader />
            </header>

            {/* Typing Text */}
            <div className={styles.typingContainer}>
                <div className={styles.typingText}>
                    <span dangerouslySetInnerHTML={{
                        __html: formatText(displayedText) + (isTyping ? `<span class="${styles.pulse}">|</span>` : '')
                    }} />
                </div>
            </div>
        </div>
    );
}