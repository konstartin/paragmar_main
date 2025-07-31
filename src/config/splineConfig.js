// src/config/splineConfig.js

/**
 * A central repository for Spline scene configurations.
 * Each key is a question ID, and the value is the configuration object for displaying the scene.
 * URLs now point to local files in the `/public` directory.
 */
import scene3 from '@/assets/3dobjects/scene2.splinecode?url';
import scene2 from '@/assets/3dobjects/scene3.splinecode?url';
import scene4 from '@/assets/3dobjects/scene4.splinecode?url';
import scene5 from '@/assets/3dobjects/scene5.splinecode?url';
import scene6 from '@/assets/3dobjects/scene6.splinecode?url';
import scene7 from '@/assets/3dobjects/scene7.splinecode?url';
import scene8 from '@/assets/3dobjects/scene8.splinecode?url';
import scene9 from '@/assets/3dobjects/scene9.splinecode?url';

export const SPLINE_CONFIGS = {
    2: {
        url: scene2,
        name: 'רורשאך1',
    },
    3: {
        url: scene3,
        name: '2רורשאך3',
    },
    4: {
        url: scene4,
        name: 'רורשאך3',
    },
    5: {
        url: scene5,
        name: 'ורשאך4',
    },
    6: {
        url: scene6,
        name: 'רורשאך5',
    },
    7: {
        url: scene7,
        name: 'רורשאך6',
    },
    8: {
        url: scene8,
        name: '7רורשאך',
    },
    9: {
        url: scene9,
        name: 'רורשאך8',
    },
};

/**
 * Retrieves the configuration for a specific question ID.
 * @param {number} questionId - The ID of the question.
 * @returns {object|null} The configuration object or null if not found.
 */
export const getSplineConfig = (questionId) => {
    return SPLINE_CONFIGS[questionId] || null;
};