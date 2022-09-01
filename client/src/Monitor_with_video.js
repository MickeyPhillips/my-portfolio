/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, useAspect } from '@react-three/drei'
import * as THREE from 'three'
export function Monitor(props) {
  // const size = useAspect(1800, 1000, 2.99)
  const { nodes, materials } = useGLTF('/monitor_with_video.gltf')
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), { src: '/woodchuck_chuck.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }),
  )
  useEffect(() => void video.play(), [video])
  return (
    <group {...props} dispose={null} scale={0.1}>
      <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.18}>
        <mesh geometry={nodes.Object_0.geometry} material={materials.wire_224198087} />
        <mesh geometry={nodes.Object_1.geometry} material={materials.wire_224198087} />
        <mesh 
        scale={[45, 25, 10]} 
        position={[-0.11, -5.82, 24.06]} 
        rotation={[Math.PI / 2, 0, 0]}
        >
          <planeBufferGeometry />
          <meshBasicMaterial toneMapped={false}>
            <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
          </meshBasicMaterial>
        </mesh>
        {/* <mesh geometry={nodes.nyan_cat.geometry} material={materials.Bella} position={[-0.11, -5.82, 24.06]} rotation={[Math.PI / 2, 0, 0]} scale={[0.18, 0.17, 0.16]} /> */}
      </group>
    </group>
  )
}

useGLTF.preload('/monitor_with_video.gltf')
