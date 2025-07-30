import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import { backgroundConfig } from '@/config/backgrounds';

const GlobalBackground = () => {
    const { selectedBackground } = useQuiz();
    const location = useLocation();
    const videoRef = useRef(null);

    // Aggressive video autoplay function
    const forceVideoPlay = (video) => {
        if (!video) return;

        // Multiple attempts to play
        const playAttempts = [
            () => video.play(),
            () => {
                video.muted = true;
                return video.play();
            },
            () => {
                video.muted = true;
                video.volume = 0;
                return video.play();
            }
        ];

        const tryPlay = async (attemptIndex = 0) => {
            if (attemptIndex >= playAttempts.length) return;

            try {
                await playAttempts[attemptIndex]();
                // console.log(`✅ Video started on attempt ${attemptIndex + 1}`);
            } catch (error) {
                // console.log(`❌ Attempt ${attemptIndex + 1} failed:`, error);
                setTimeout(() => tryPlay(attemptIndex + 1), 100);
            }
        };

        tryPlay();
    };

    // Force video to play ONLY when background changes
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            // Set video properties before playing
            video.muted = true;
            video.playsInline = true;
            video.autoplay = true;
            video.loop = true;

            // Force play immediately
            forceVideoPlay(video);

            // Set up interval to ensure video keeps playing
            const interval = setInterval(() => {
                if (video.paused) {
                    // console.log('🔄 Video paused, restarting...');
                    forceVideoPlay(video);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [selectedBackground]);

    // Handle user interaction to enable autoplay
    useEffect(() => {
        const handleUserInteraction = () => {
            const video = videoRef.current;
            if (video && video.paused) {
                forceVideoPlay(video);
            }
        };

        // Listen for any user interaction
        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('touchstart', handleUserInteraction);
        document.addEventListener('keydown', handleUserInteraction);

        return () => {
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
            document.removeEventListener('keydown', handleUserInteraction);
        };
    }, []);

    // Define pages where video background should be shown
    const allowedPages = [
        '/dress',
        '/about',
        '/dressbuy',
        '/decoding',
        '/question/2',
        '/question/3',
        '/question/4',
        '/question/5',
        '/question/6',
        '/question/7',
        '/question/8',
        '/question/9',
        '/question/10',
        '/question/11',
        '/question/12',
    ];

    // Check if current page should show video background
    const shouldShowVideo = allowedPages.some(page =>
        location.pathname === page || location.pathname.startsWith(page)
    );

    // Exclude first question specifically
    if (location.pathname === '/question/1') {
        // console.log('🚫 Video not shown on first question');
        return null;
    }

    // Don't show video on pages where it's not needed
    if (!shouldShowVideo) {
        // console.log('🚫 Video not shown on:', location.pathname);
        return null;
    }

    if (!selectedBackground) return null;

    const videoSrc = backgroundConfig[selectedBackground]?.video;
    if (!videoSrc) return null;

    // console.log('🎥 Showing video on:', location.pathname, 'Background:', selectedBackground);

    return (
        <video
            ref={videoRef}
            key={selectedBackground}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            onLoadedData={() => {
                // console.log('✅ Video loaded:', selectedBackground);
                forceVideoPlay(videoRef.current);
            }}
            onCanPlay={() => {
                // console.log('📺 Video can play:', selectedBackground);
                forceVideoPlay(videoRef.current);
            }}
            onLoadedMetadata={() => {
                forceVideoPlay(videoRef.current);
            }}
            onPause={() => {
                // console.log('⏸️ Video paused, restarting...');
                setTimeout(() => forceVideoPlay(videoRef.current), 50);
            }}
            style={{
                // Match aspect-wrapper positioning and size exactly
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',

                // Same 16:9 constraints as aspect-wrapper
                width: '100vw',
                height: '56.25vw', // 16:9 ratio
                maxHeight: '100vh',
                maxWidth: '177.78vh', // When height is limiting

                objectFit: 'cover',
                zIndex: 1, // Behind aspect-wrapper
                pointerEvents: 'none'
            }}
        >
            <source src={videoSrc} type="video/mp4" />
        </video>
    );
};

export default GlobalBackground;