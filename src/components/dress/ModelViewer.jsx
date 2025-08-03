
// export default ModelViewer;
import React, { Suspense, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Bounds } from '@react-three/drei';
import { useQuiz } from '@/context/useQuiz.js';import styles from './ModelViewer.module.css';


function FadingModel({ url }) {
  const navigate = useNavigate();
  const { scene } = useGLTF(url);
  const groupRef = useRef();


  const FADE_IN_DURATION = 6;
  const WAIT_DURATION = 1;    
  const TOTAL_DURATION = FADE_IN_DURATION + WAIT_DURATION;

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material.transparent = true;
          child.material.opacity = 0;
        }
      });
    }
  }, [scene]);

  useEffect(() => {
    const navigationTimer = setTimeout(() => {
   
      navigate('/dressbuy'); 
    }, TOTAL_DURATION * 1000);

    return () => clearTimeout(navigationTimer);
  }, [navigate, TOTAL_DURATION]);

 
  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    if (elapsedTime > FADE_IN_DURATION) return; 
    const currentOpacity = Math.min(elapsedTime / FADE_IN_DURATION, 1);

    if (groupRef.current) {
      groupRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.opacity = currentOpacity;
        }
      });
    }
  });

  return (
    <Bounds fit clip observe margin={1.4}>
      <primitive ref={groupRef} object={scene} />
    </Bounds>
  );
}


const ModelViewer = () => {
  const { getProduct } = useQuiz();
  const productData = getProduct();

  if (!productData || !productData.staticObjectUrl) {
    return <div className={styles.canvasContainer}>Loading...</div>;
  }

  const modelUrl = productData.staticObjectUrl;
  useGLTF.preload(modelUrl);

  return (
    <div className={styles.canvasContainer}>
      <Canvas camera={{ fov: 50, near: 0.05, far: 2000, position: [0, 0, 10] }}>
        <ambientLight intensity={1.5} />
        <directionalLight intensity={2.5} position={[5, 10, 7.5]} />
        <Suspense fallback={null}>
          <FadingModel url={modelUrl} />
        </Suspense>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export default ModelViewer;