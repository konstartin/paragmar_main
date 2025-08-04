
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FinalPage.module.css';
import ExtendHeader from '@/components/Headers/ExtendHeader';
import { getObjectData } from '../config/objectsConfig';

export default function FinalPage() {
  const navigate = useNavigate();

  /* ───────────── Data ───────────── */
  const selectedAlterEgo =
    localStorage.getItem('finalProductKey') || 'warrior';
  const objectData = getObjectData(selectedAlterEgo);
  const videoUrl = objectData?.finalVideo;
  const fallbackVideoUrl =
    videoUrl || getObjectData('warrior')?.finalVideo || '';
  const fullText =
    "//YOU'VE ARRIVED, NOW ENJOY YOURSELF.\nREMEMBER, THERE'S NO ONE LIKE YOU";

  /* ───────────── State ───────────── */
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showText, setShowText] = useState(true); // ← new ‼️

  /* ───────────── Typing animation ───────────── */
  useEffect(() => {
    const start = setTimeout(() => setIsTyping(true), 7000);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    if (!isTyping || currentIndex >= fullText.length) return;
    const t = setTimeout(() => {
      setDisplayedText((prev) => prev + fullText[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, 50);
    return () => clearTimeout(t);
  }, [isTyping, currentIndex]);

  /* ───────────── Video callbacks ───────────── */
  const handleVideoEnd = () => {
    console.log('Video ended – hide text now, navigate in 1 s');
    setShowText(false);                 // מיד מסתיר טקסט
    setTimeout(() => navigate('/'), 1000); // מעבר דף אחרי שנייה
  };

  const handleVideoPlay = (e) => {
    // … (קוד עצירת אודיו נשאר כמו שהיה אצלך)
    const v = e.target;
    v.muted = false;
    v.volume = 0.8;
  };

  /* ───────────── Helpers ───────────── */
  const nl2br = (t) => t.replace(/\n/g, '<br>');

  /* ───────────── JSX ───────────── */
  return (
    <div className={styles.pageContainer}>
      {/* Video */}
      <video
        className={styles.videoBackground}
        autoPlay
        playsInline
        preload="auto"
        controls={false}
        style={{ pointerEvents: 'none' }}
        onPlay={handleVideoPlay}
        onEnded={handleVideoEnd}
      >
        <source src={fallbackVideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header */}
      <header className={styles.headerArea}>
        <ExtendHeader />
      </header>

      {/* Typing Text */}
      {showText && (
        <div className={styles.typingContainer}>
          <div className={styles.typingText}>
            <span
              dangerouslySetInnerHTML={{
                __html:
                  nl2br(displayedText) +
                  (isTyping
                    ? `<span class="${styles.pulse}">|</span>`
                    : ''),
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
