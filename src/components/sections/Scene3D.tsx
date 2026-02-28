"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { SCENE_COLORS } from "@/lib/design-system/forest-tokens";

function HouseModel() {
  const group = useRef<THREE.Group>(null);

  return (
    <group ref={group}>
      {/* Simple house shape - roof */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <coneGeometry args={[1.2, 1, 4]} />
        <meshStandardMaterial color={SCENE_COLORS.roof} />
      </mesh>
      {/* House body */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 1, 1.2]} />
        <meshStandardMaterial color={SCENE_COLORS.body} />
      </mesh>
      {/* Base/ground */}
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial color={SCENE_COLORS.ground} />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div
      className="w-full h-full min-h-[300px] rounded-2xl overflow-hidden border"
      style={{
        backgroundColor: "var(--color-bg-layer-3)",
        borderColor: "var(--color-card-border)",
      }}
    >
      <Canvas
        camera={{ position: [3, 2, 3], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-3, 2, -2]} intensity={0.3} />
        <HouseModel />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={2}
          maxDistance={8}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
