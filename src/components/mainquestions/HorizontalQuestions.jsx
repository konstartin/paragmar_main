import React from 'react';
import { useQuiz } from '@/context/QuizContext';
import layerHSvg from '@/assets/questions/Layer_H.svg';
import styles from './HorizontalQuestions.module.css';

const questions = {
    10: {
        options: ['FIBER GRID', 'CORAL FRAME', 'SKELETAL BLOOM']
    },
    11: {
        options: ['PULSING BEAT', 'WAVE FLOW', 'UNEXPECTED MOTION']
    },
    12: {
        options: ['LOOSE FLOW', 'PIERCING FORM', 'SOFT CLUSTER']
    }
};

export default function HorizontalQuestions({ questionIndex, onAnswer }) {
    const { answers } = useQuiz();
    const selected = answers[questionIndex];
    const questionNum = questionIndex + 1;
    const question = questions[questionNum];

    if (!question) return null;

    const handleSelect = (label) => {
        onAnswer(questionIndex, { label, value: label });
    };

    return (
        <div className={styles.container}>
            <div className={styles.options}>
                {question.options.map((option, index) => (
                    <React.Fragment key={option}>
                        <button
                            className={`${styles.option} ${selected?.value === option ? styles.selected : ''}`}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </button>
                        {index < question.options.length - 1 && (
                            <img src={layerHSvg} className={styles.divider} alt="Divider" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}