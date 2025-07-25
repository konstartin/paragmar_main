
import React, { Suspense, useMemo, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Bounds } from '@react-three/drei';
import { useQuiz } from '@/context/QuizContext';
import styles from './ProductViewer.module.css';

function StaticModel({ url }) {
  const { scene } = useGLTF(url);
  return (
    <Bounds fit clip observe margin={1.2}>
      <primitive object={scene} />
    </Bounds>
  );
}

function AnimatedModel({ url, clipName }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    const nameToPlay = clipName || names[0];
    if (actions[nameToPlay]) {
      actions[nameToPlay].reset().fadeIn(0.3).play();
    }
    return () => {
      if (actions[nameToPlay]) actions[nameToPlay].fadeOut(0.2);
    };
  }, [actions, names, clipName]);

  return (
    <group ref={group}>
      <Bounds fit clip observe margin={1.2}>
        <primitive object={scene} />
      </Bounds>
    </group>
  );
}

export default function ProductViewer() {
  const { viewMode, getProduct } = useQuiz();
  const product = getProduct();

  if (!product) return <div className={styles.viewerContainer}>Loading Product...</div>;

  const staticUrl = product.staticObjectUrl || '';
  const animUrl = product.dynamicObjectUrl || '';

  if (staticUrl) useGLTF.preload(staticUrl);
  if (animUrl) useGLTF.preload(animUrl);

  const showAnimation = viewMode === 'animation' && animUrl;
  const modeKey = useMemo(() => (showAnimation ? 'anim' : 'static'), [showAnimation]);

  return (
    <div className={styles.viewerContainer}>
      <Canvas camera={{ fov: 50, near: 0.01, far: 2000 }}>
        <ambientLight intensity={1.5} />
        <directionalLight intensity={2.5} position={[5, 10, 7.5]} />
        <Suspense fallback={null}>
          {showAnimation ? (
            <AnimatedModel key={modeKey} url={animUrl} />
          ) : (
            <StaticModel key={modeKey} url={staticUrl} />
          )}
        </Suspense>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
