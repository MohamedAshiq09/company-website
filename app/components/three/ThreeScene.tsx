"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Custom Shader for the Sphere
    const vertexShader = `
      varying vec3 vNormal;
      varying vec2 vUv;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vUv = uv;
        vec3 transformed = position + 0.1 * sin(position.y * 5.0) * vNormal;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float time;
      varying vec3 vNormal;
      varying vec2 vUv;
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 5.0);
        vec3 glowColor = vec3(0.1, 0.5, 1.0) * intensity;
        vec3 color = mix(glowColor, vec3(0.1, 0.1, 0.1), 0.5);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Create Sphere Geometry and Shader Material
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0.0 },
      },
      side: THREE.DoubleSide,
      transparent: true,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Bloom Effect for Glowing Look
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.1;
    bloomPass.strength = 1.5;
    bloomPass.radius = 1.0;
    composer.addPass(bloomPass);

    // Add Particles Background
    const addParticles = () => {
      const particles = new THREE.BufferGeometry();
      const particleCount = 500;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
      }
      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const particleMaterial = new THREE.PointsMaterial({ color: 0xaaaaaa, size: 0.02 });
      const particleSystem = new THREE.Points(particles, particleMaterial);
      scene.add(particleSystem);
    };
    addParticles();

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update uniforms
      sphere.material.uniforms.time.value += 0.05;

      // Rotate sphere for effect
      sphere.rotation.y += 0.002;
      sphere.rotation.x += 0.002;

      // Render scene with bloom effect
      composer.render();
    };
    animate();

    // Adjust to window resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default ThreeScene;
