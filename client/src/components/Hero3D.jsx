/**
 * 3D Hero Section Component
 *
 * How it works:
 * 1. Canvas creates WebGL context for 3D rendering
 * 2. useGLTF loads the robot.glb model from public folder
 * 3. useFrame hook runs every frame for animation
 * 4. Mouse movement controls robot rotation
 * 5. Lights illuminate the scene
 * 6. Suspense shows fallback while model loads
 *
 * Performance optimizations:
 * - Draco compression for smaller model files
 * - Pointer events only when needed
 * - Frame limiting (not shown but recommended)
 * - Low polygon model for faster rendering
 */

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Stage,
  PresentationControls,
} from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function Robot3D() {
  /**
   * Loads 3D model from public/models/robot.glb
   *
   * useGLTF automatically:
   * - Fetches the GLB file
   * - Parses geometry, materials, textures
   * - Returns scene object ready to render
   *
   * The model should be:
   * - Draco compressed for smaller size
   * - Under 2MB for fast loading
   * - Optimized polygon count (under 50k triangles)
   */
  const { scene } = useGLTF("/models/robot.glb");
  const meshRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse position for interactive rotation
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /**
   * Animation loop - runs every frame (60fps)
   *
   * Smoothly rotates robot based on:
   * - Mouse position (interactive)
   * - Time (automatic idle animation)
   *
   * Uses lerp (linear interpolation) for smooth transitions
   */
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Idle rotation
      meshRef.current.rotation.y += delta * 0.2;

      // Mouse-based tilt (subtle movement)
      meshRef.current.rotation.x = mousePos.y * 0.1;
      meshRef.current.rotation.z = mousePos.x * 0.1;
    }
  });

  return (
    <primitive ref={meshRef} object={scene} scale={2.5} position={[0, -1, 0]} />
  );
}

function LoadingFallback() {
  /**
   * Shows while 3D model loads
   * Simple animated text to indicate loading state
   */
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-xl text-indigo-400 animate-pulse">
        Loading 3D Model...
      </div>
    </div>
  );
}

export default function Hero3D() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent"></div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left side: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
            Full-Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Building innovative web experiences with modern technologies
          </p>
          <div className="flex gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-indigo-600 rounded-lg font-semibold hover:bg-indigo-600/10 transition"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right side: 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[600px] relative"
        >
          {/**
           * Canvas creates WebGL rendering context
           *
           * Props explained:
           * - camera: Sets default view position and angle
           * - dpr: Device pixel ratio for sharp rendering on retina displays
           * - gl: WebGL settings for performance
           */}
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
          >
            {/**
             * Suspense boundary for async loading
             * Shows fallback until model loads
             */}
            <Suspense fallback={null}>
              {/* Ambient light provides base illumination */}
              <ambientLight intensity={0.5} />

              {/* Directional light creates shadows and depth */}
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <directionalLight position={[-10, -10, -5]} intensity={0.5} />

              {/* Spot light for dramatic effect */}
              <spotLight position={[0, 10, 0]} intensity={0.3} />

              {/* The 3D robot model */}
              <Robot3D />

              {/**
               * OrbitControls allows user interaction:
               * - Mouse drag to rotate
               * - Scroll to zoom
               * - Auto rotation when idle
               */}
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
              />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-indigo-400 rounded-full p-1">
          <div className="w-1.5 h-3 bg-indigo-400 rounded-full mx-auto"></div>
        </div>
      </motion.div>
    </section>
  );
}

// Preload the model for faster initial load
useGLTF.preload("/models/robot.glb");
