import React, { Suspense, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useQuiz } from '@/context/QuizContext';
import styles from './ModelViewer.module.css';

function SlowEntranceModel({ url }) {
  const meshRef = useRef();
  const navigate = useNavigate();
  const effectRef = useRef();
  const { nodes } = useGLTF(url);
  const mainMesh = nodes.mesh_0;

  const bloomFadeDuration = 11;
  const opacityPhaseOneEnd = 7;
  const opacityPhaseTwoDuration = 4;
  const initialOpacity = 0.15;

  useEffect(() => {
    if (mainMesh) {
      mainMesh.material.transparent = true;
      mainMesh.material.opacity = 0;
    }
  }, [mainMesh]);

  


  useEffect(() => {
    const navigationTimer = setTimeout(() => {
      navigate('/dressbuy');
    }, (bloomFadeDuration + 1) * 1000);

    return () => clearTimeout(navigationTimer);
  }, [navigate]);

  useFrame((state) => {
    if (!meshRef.current || !effectRef.current) return;

    const elapsedTime = state.clock.getElapsedTime();

    let currentOpacity;
    if (elapsedTime < opacityPhaseOneEnd) {
      currentOpacity = (elapsedTime / opacityPhaseOneEnd) * initialOpacity;
    } else {
      const phaseTwoProgress = Math.min((elapsedTime - opacityPhaseOneEnd) / opacityPhaseTwoDuration, 1);
      currentOpacity = initialOpacity + (1 - initialOpacity) * phaseTwoProgress;
    }
    meshRef.current.material.opacity = currentOpacity;

    const bloomProgress = Math.min(elapsedTime / bloomFadeDuration, 1);
    effectRef.current.intensity = 2.0 * (1 - bloomProgress);
  });

  if (!mainMesh) {
    return null;
  }

  return (
    <>
      <mesh ref={meshRef} geometry={mainMesh.geometry} material={mainMesh.material} position={[0, 0.2, 0]} />
      <EffectComposer>
        <Bloom
          ref={effectRef}
          intensity={2.0}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.9}
          height={480}
        />
      </EffectComposer>
    </>
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
      <Canvas camera={{ fov: 30, near: 0.01, far: 2000 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[8, 10, 7.5]} intensity={2.5} />
        <Suspense fallback={null}>
          <SlowEntranceModel url={modelUrl} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
