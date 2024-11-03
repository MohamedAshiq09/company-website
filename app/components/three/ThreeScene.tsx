// "use client"
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

// const ThreeScene: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     // Initialize scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     if (mountRef.current) {
//       mountRef.current.appendChild(renderer.domElement);
//     }

//     // Custom Shader for the Sphere
//     const vertexShader = `
//       varying vec3 vNormal;
//       varying vec2 vUv;
//       void main() {
//         vNormal = normalize(normalMatrix * normal);
//         vUv = uv;
//         vec3 transformed = position + 0.1 * sin(position.y * 5.0) * vNormal;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
//       }
//     `;

//     const fragmentShader = `
//       uniform float time;
//       varying vec3 vNormal;
//       varying vec2 vUv;
//       void main() {
//         float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 5.0);
//         vec3 glowColor = vec3(0.1, 0.5, 1.0) * intensity;
//         vec3 color = mix(glowColor, vec3(0.1, 0.1, 0.1), 0.5);
//         gl_FragColor = vec4(color, 1.0);
//       }
//     `;

//     // Create Sphere Geometry and Shader Material
//     const geometry = new THREE.SphereGeometry(1, 64, 64);
//     const material = new THREE.ShaderMaterial({
//       vertexShader,
//       fragmentShader,
//       uniforms: {
//         time: { value: 0.0 },
//       },
//       side: THREE.DoubleSide,
//       transparent: true,
//     });

//     const sphere = new THREE.Mesh(geometry, material);
//     scene.add(sphere);

//     // Bloom Effect for Glowing Look
//     const composer = new EffectComposer(renderer);
//     composer.addPass(new RenderPass(scene, camera));

//     const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
//     bloomPass.threshold = 0.1;
//     bloomPass.strength = 1.5;
//     bloomPass.radius = 1.0;
//     composer.addPass(bloomPass);

//     // Add Particles Background
//     const addParticles = () => {
//       const particles = new THREE.BufferGeometry();
//       const particleCount = 500;
//       const positions = new Float32Array(particleCount * 3);
//       for (let i = 0; i < particleCount * 3; i++) {
//         positions[i] = (Math.random() - 0.5) * 10;
//       }
//       particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

//       const particleMaterial = new THREE.PointsMaterial({ color: 0xaaaaaa, size: 0.02 });
//       const particleSystem = new THREE.Points(particles, particleMaterial);
//       scene.add(particleSystem);
//     };
//     addParticles();

//     // Animation Loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Update uniforms
//       sphere.material.uniforms.time.value += 0.05;

//       // Rotate sphere for effect
//       sphere.rotation.y += 0.002;
//       sphere.rotation.x += 0.002;

//       // Render scene with bloom effect
//       composer.render();
//     };
//     animate();

//     // Adjust to window resize
//     const handleResize = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       composer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//       scene.clear();
//     };
//   }, []);

//   return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
// };

// export default ThreeScene;

"use client";
import React, { useEffect, useRef, useState } from 'react';

interface Star {
  top: string;
  left: string;
  duration: number;
}

const ThreeScene: React.FC = () => {
  const globeRef = useRef<HTMLDivElement>(null);
  const touchIndicatorRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotationX, setRotationX] = useState(23.5);
  const [rotationY, setRotationY] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      return [...Array(100)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 4 + Math.random() * 4,
      }));
    };
    setStars(generateStars());
  }, []);

  useEffect(() => {
    const globe = globeRef.current;
    const touchIndicator = touchIndicatorRef.current;

    let startX = 0;
    let startY = 0;
    let lastX = rotationY;
    let lastY = rotationX;

    const startDragging = (e: MouseEvent | TouchEvent) => {
      setIsDragging(true);
      setAutoRotate(false);

      if (e instanceof MouseEvent) {
        startX = e.clientX;
        startY = e.clientY;
      } else {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }

      lastX = rotationY;
      lastY = rotationX;
    };

    const drag = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;

      const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;

      setRotationY(lastX + (clientX - startX) * 0.2);
      setRotationX(Math.max(-45, Math.min(45, lastY + (clientY - startY) * 0.2)));

      if (touchIndicator) {
        touchIndicator.style.left = `${clientX}px`;
        touchIndicator.style.top = `${clientY}px`;
        touchIndicator.style.opacity = '1';
      }
    };

    const stopDragging = () => {
      setIsDragging(false);
      if (touchIndicator) touchIndicator.style.opacity = '0';
      setTimeout(() => setAutoRotate(true), 1500);
    };

    globe?.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);

    globe?.addEventListener('touchstart', startDragging);
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('touchend', stopDragging);

    return () => {
      globe?.removeEventListener('mousedown', startDragging);
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('mouseup', stopDragging);

      globe?.removeEventListener('touchstart', startDragging);
      document.removeEventListener('touchmove', drag);
      document.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, rotationX, rotationY]);

  useEffect(() => {
    const animate = () => {
      if (autoRotate && !isDragging) setRotationY((prev) => prev + 0.2);
      requestAnimationFrame(animate);
    };
    animate();
  }, [autoRotate, isDragging]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden text-white">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-80"
            style={{
              width: '4x',
              height: '4px',
              top: star.top,
              left: star.left,
              animation: `pulse ${star.duration}s infinite`,
              boxShadow: '0 0 12px rgba(255, 255, 255, 0.8)', // Stronger glow effect
            }}
          />
        ))}
      </div>

      {/* Touch Indicator */}
      <div
        ref={touchIndicatorRef}
        className="absolute w-5 h-5 bg-blue-500 rounded-full opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>

      {/* Globe */}
      <div
        ref={globeRef}
        className="w-96 h-96 relative z-10 cursor-grab"
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute w-full h-full rounded-full"
          style={{ transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)` }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={`lat-${i}`}
              className="absolute w-full h-full border rounded-full border-blue-500/50 shadow-lg"
              style={{
                transform: `rotateX(${(i - 2) * 30}deg)`,
                borderWidth: '3px', // Thicker lines
                boxShadow: '0 0 8px rgba(30, 144, 255, 0.6)', // Glow effect
              }}
            ></div>
          ))}
          {[...Array(6)].map((_, i) => (
            <div
              key={`lon-${i}`}
              className="absolute w-full h-full border rounded-full border-blue-500/50 shadow-lg"
              style={{
                transform: `rotateY(${i * 30}deg)`,
                borderWidth: '3px', // Thicker lines
                boxShadow: '0 0 8px rgba(30, 144, 255, 0.6)', // Glow effect
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeScene;

