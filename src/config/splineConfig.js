// src/config/splineConfig.js

/**
 * A central repository for Spline scene configurations.
 * Each key is a question ID, and the value is the configuration object for displaying the scene.
 * URLs now point to local files in the `/public` directory.
 */
export const SPLINE_CONFIGS = {
    2: {
        url: '/src/assets/3dobjects/scene.splinecode',
        width: 1300,
        height: 1300,
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        scale: 1.0,
        zIndex: 1
    },
    3: {
        url: 'https://prod.spline.design/ITbmF6KaYORWAdIm/scene.splinecode',
        width: 1300,
        height: 1300,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        scale: 1.0,
        zIndex: 1
    },
    4: {
        url: 'https://prod.spline.design/hR7WjXazDNrT75SZ/scene.splinecode',
        width: 1300,
        height: 1300,
        top: '70%',
        left: '29%',
        transform: 'translate(-50%, -50%)',
        scale: 1.0,
        zIndex: 1
    },
    5: {
        url: 'https://prod.spline.design/2bV-VFQJBFTLN-o7/scene.splinecode',
        width: 1300,
        height: 1300,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        scale: 1.0,
        zIndex: 1
    },
    6: {
        url: 'https://prod.spline.design/clLvbdsF4aYGQrsX/scene.splinecode',
        width: 1300,
        height: 1300,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        scale: 1.0,
        zIndex: 1
    },
    7: {
        url: 'https://prod.spline.design/poI0QhuFsCmfWBwc/scene.splinecode',
        width: 1300,
        height: 1300,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        scale: 1.0,
        zIndex: 1
    },
    8: {
        url: 'https://my.spline.design/untitled-RRjsge7OyGalw21YxWtwz3ax/',
        width: 1300,
        height: 1300,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        scale: 1.0,
        zIndex: 1
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