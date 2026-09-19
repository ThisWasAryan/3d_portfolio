import React from 'react';
import { useGLTF } from '@react-three/drei';

const DESK_POSITION: [number, number, number] = [0, -5.066, 2.5];
const DESK_SCALE = 0.006;
const DESK_INNER_OFFSET: [number, number, number] = [-1287.77, 0, -833.71];

const CAMERA_POSITION: [number, number, number] = [-2.40, -0.18, 3.00];
const CAMERA_ROTATION: [number, number, number] = [0.00, 0.50, 0.00];
const CAMERA_SCALE = 6.0;

const GANESH_POSITION: [number, number, number] = [3.00, -0.13, 1.50];
const GANESH_ROTATION: [number, number, number] = [0.00, 2.50, 0.00];
const GANESH_SCALE = 4.5;

const EARBUDS_POSITION: [number, number, number] = [2.40, -0.18, 3.20];
const EARBUDS_ROTATION: [number, number, number] = [0.00, -0.20, 0.00];
const EARBUDS_SCALE = 0.005;

export function Desk() {
  const { scene } = useGLTF('/models/desk_set.glb');
  return (
    <group position={DESK_POSITION} scale={DESK_SCALE}>
      <primitive object={scene} position={DESK_INNER_OFFSET} />
    </group>
  );
}

export function CameraModel() {
  const { scene } = useGLTF('/models/canon_at-1_retro_camera.glb');
  return <primitive object={scene} position={CAMERA_POSITION} rotation={CAMERA_ROTATION} scale={CAMERA_SCALE} />;
}

export function GaneshIdol() {
  const { scene } = useGLTF('/models/ganesh_idol_model_-_meshroom.glb');
  return <primitive object={scene} position={GANESH_POSITION} rotation={GANESH_ROTATION} scale={GANESH_SCALE} />;
}

export function Earbuds() {
  const { scene } = useGLTF('/models/samsung_galaxy_buds_live.glb');
  return <primitive object={scene} position={EARBUDS_POSITION} rotation={EARBUDS_ROTATION} scale={EARBUDS_SCALE} />;
}

useGLTF.preload('/models/desk_set.glb');
