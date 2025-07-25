import React from 'react';
import Spline from '@splinetool/react-spline';

/**
 * SplineScene Component
 * A reusable wrapper for the Spline component.
 * It receives a configuration object to define its appearance and position.
 * @param {object} config - The configuration object for the scene.
 */
export default function SplineScene({ config }) {
  // If no config is provided, don't render anything.
  if (!config) {
    return null;
  }

  /**
   * Creates the style object for the Spline container div
   * based on the provided config.
   */
  // const sceneStyle = {
  //   width: config.width ? `${config.width}px` : '100%',
  //   height: config.height ? `${config.height}px` : '100%',
  //   top: config.top,
  //   left: config.left,
  //   transform: config.transform,
  //   zIndex: config.zIndex,
  // };

  return (
    <Spline
      scene={config.url}
      // style={sceneStyle}
    />
  );
}