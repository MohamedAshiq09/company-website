import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import React from 'react';
import { DirectionalLight } from 'three';

const GltfModel: React.FC = () => {
  const { scene } = useGLTF('/public/model.gltf');

  return (
  
  );
};

export default GltfModel;
