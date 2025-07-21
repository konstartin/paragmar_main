
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import styles from './BackgroundSelectionPage.module.css';
import SelectionButton from '../components/SelectionButton';
import { backgroundConfig } from '../config/backgrounds';
import SimpleHeader from '../components/Headers/SimpleHeader';
import InstructionOverlay from '../components/InstructionOverlay';

export default function BackgroundSelectionPage() {
    const navigate = useNavigate();
    const { selectBackground, next  } = useQuiz();

    const handleSelection = (backgroundId) => {
        selectBackground(backgroundId);
        next()
        navigate('/question/2');
    };

    return (
        <div className={styles.pageContainer}>
            <InstructionOverlay
              currentStep={1}
              line1="click to choose"
              line2="your environment"
            />

            {Object.entries(backgroundConfig).map(([id, config]) => (
                <div
                    key={id}
                    className={`${styles.backgroundOption} ${id}`}
                >
                    <div className={styles.headerPlacement}>
                        <SimpleHeader />
                    </div>
                    
                    <div className={styles.buttonPlacement}>
                        <SelectionButton
                            text={config.label}
                            onClick={() => handleSelection(id)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}