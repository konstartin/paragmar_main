const horizontalQuestions = [
    {
        questionNumber: 10,
        questionText: "CLICK TO CHOOSE\nWHICH WORLD MATCHES YOUR ENERGY?",
        options: [
            { label: 'FIBER GRID', value: 'FIBER GRID' },
            { label: 'CORAL FRAME', value: 'CORAL FRAME' },
            { label: 'SKELETAL BLOOM', value: 'SKELETAL BLOOM' }
        ]
    },
    {
        questionNumber: 11,
        questionText: "CLICK TO CHOOSE\nWHICH MOVEMENT PULLS YOU IN INSTINCTIVELY?",
        options: [
            { label: 'PULSING BEAT', value: 'PULSING BEAT' },
            { label: 'WAVE FLOW', value: 'WAVE FLOW' },
            { label: 'UNEXPECTED MOTION', value: 'UNEXPECTED MOTION' }
        ]
    },
    {
        questionNumber: 12,
        questionText: "CLICK TO CHOOSE\nWHAT SENSATION DRAWS YOU?",
        options: [
            { label: 'LOOSE FLOW', value: 'LOOSE FLOW' },
            { label: 'PIERCING FORM', value: 'PIERCING FORM' },
            { label: 'SOFT CLUSTER', value: 'SOFT CLUSTER' }
        ]
    }
];

export function getHorizontalQuestionConfig(num) {
    return horizontalQuestions.find((q) => q.questionNumber === num);
}

export default horizontalQuestions;