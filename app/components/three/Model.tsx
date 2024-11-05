import React from 'react';
import { useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/model.gltf'); 
  return <primitive object={scene} scale={0.5} />;
};

export default Model;