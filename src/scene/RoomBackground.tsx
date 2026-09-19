import React from 'react';

export function RoomBackground() {
  return (
    <group>
      {/* Floor */}
      <mesh position={[0, -5.07, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#f5f5f0" />
      </mesh>
      
      {/* Back Wall (Behind desk) */}
      <mesh position={[0, 10, -5]} receiveShadow>
        <planeGeometry args={[100, 40]} />
        <meshStandardMaterial color="#ff7e17" />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-20, 10, 20]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[100, 40]} />
        <meshStandardMaterial color="#f5f5f0" />
      </mesh>

      {/* Right Wall */}
      <mesh position={[20, 10, 20]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[100, 40]} />
        <meshStandardMaterial color="#f5f5f0" />
      </mesh>
    </group>
  );
}
