import { useState, useEffect } from 'react';
import styles from './FinalPage.module.css';
import ExtendHeader from '@/components/Headers/ExtendHeader';
import { getFinalVideo } from '../config/objectsConfig';

export default function FinalPage() {
    const selectedAlterEgo = localStorage.getItem('selectedAlterEgo') || 'warrior';
    const videoUrl = getFinalVideo(selectedAlterEgo);
    const fullText = "//YOU'VE ARRIVED, NOW ENJOY YOURSELF.\nREMEMBER, THERE'S NO ONE LIKE YOU";

    // Состояния для анимации печати
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    // Запуск печати после загрузки компонента
    useEffect(() => {
        const startTimer = setTimeout(() => {
            setIsTyping(true);
        }, 1000); // Задержка 1 секунда перед началом

        return () => clearTimeout(startTimer);
    }, []);

    // Анимация печати
    useEffect(() => {
        if (!isTyping || currentIndex >= fullText.length) {
            return;
        }

        const typingTimer = setTimeout(() => {
            setDisplayedText(prev => prev + fullText[currentIndex]);
            setCurrentIndex(prev => prev + 1);
        }, 80); // Скорость печати - 80ms между символами

        return () => clearTimeout(typingTimer);
    }, [currentIndex, isTyping, fullText]);

    // Форматирование текста для HTML
    const formatText = (text) => {
        return text.replace(/\n/g, '<br>');
    };

    return (
        <div className={styles.pageContainer}>
            {/* Video Background */}
            <video
                className={styles.videoBackground}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                controls={false}
                style={{ pointerEvents: 'none' }}
            >
                <source src={videoUrl} type="video/mp4" />
            </video>

            {/* Header */}
            <header className={styles.headerArea}>
                <ExtendHeader />
            </header>

            {/* Typing Text */}
            <div className={styles.typingContainer}>
                <div className={styles.typingText}>
                    <span dangerouslySetInnerHTML={{
                        __html: formatText(displayedText) + `<span class="${styles.pulse}">|</span>`
                    }} />
                </div>
            </div>
        </div>
    );
}