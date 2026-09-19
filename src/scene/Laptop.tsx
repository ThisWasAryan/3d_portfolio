import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useAppStore } from '../stores/appStore';
import type { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cube002_Laptop_0: THREE.Mesh
    Cube002_Keys_0: THREE.Mesh
  }
  materials: {
    Laptop: THREE.MeshStandardMaterial
    Keys: THREE.MeshStandardMaterial
  }
}

// Tuned position constants — extracted from leva controls
const LAPTOP_POSITION: [number, number, number] = [0.04, -0.13, 2.60];
const LAPTOP_ROTATION: [number, number, number] = [0.00, -0.40, 0.00];
const LAPTOP_SCALE = 0.01;

export function Laptop(props: any) {
  const groupRef = useRef<THREE.Group>(null);
  // Reusable Vector3 to avoid per-frame allocation
  const _tempVec3 = useRef(new THREE.Vector3());
  
  const { nodes, materials } = useGLTF('/models/laptop_free.glb') as unknown as GLTFResult;
  
  const [hovered, setHovered] = useState(false);
  const setViewMode = useAppStore((state) => state.setViewMode);
  const viewMode = useAppStore((state) => state.viewMode);

  // Change cursor on hover
  useEffect(() => {
    if (viewMode === 'room') {
      document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered, viewMode]);

  // Subtle hover animation — uses reusable Vector3
  useFrame(() => {
    if (!groupRef.current || viewMode !== 'room') return;
    const targetScale = hovered ? LAPTOP_SCALE * 1.05 : LAPTOP_SCALE;
    _tempVec3.current.set(targetScale, targetScale, targetScale);
    groupRef.current.scale.lerp(_tempVec3.current, 0.1);
  });

  const handleClick = (e: any) => {
    if (viewMode !== 'room') return;
    e.stopPropagation();
    setViewMode('laptop-transition');
  };

  return (
    <group
      {...props}
      ref={groupRef}
      position={LAPTOP_POSITION}
      rotation={LAPTOP_ROTATION}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={LAPTOP_SCALE}
    >
      <group position={[88.874, 0, -54.171]}>
        <group position={[-88.874, 0, 54.171]} rotation={[-Math.PI / 2, 0, 0.41]}>
          <mesh geometry={nodes.Cube002_Laptop_0.geometry} material={materials.Laptop} />
          <mesh geometry={nodes.Cube002_Keys_0.geometry} material={materials.Keys} />
        </group>
      </group>
      
      {viewMode === 'laptop-transition' && (
        <pointLight color="lightblue" intensity={2} distance={200} position={[0, 100, 50]} />
      )}
      
      {hovered && viewMode === 'room' && (
        <pointLight color="white" intensity={3} distance={500} position={[0, 150, 0]} />
      )}
    </group>
  );
}

useGLTF.preload('/models/laptop_free.glb');
