/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LangPC(props) {
  const { nodes, materials } = useGLTF('/lang_pc.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-5, 5, 0]}>
        <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials['Material.002']} position={[10, 0, 0]} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials['Material.003']} position={[0, 10, 0]} />
        <mesh geometry={nodes.Cube_4.geometry} material={materials['Material.004']} position={[10, 10, 0]} />
      </group>
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.005']} position={[0, 10, 0]} scale={[11.25, 11.25, 6.25]} />
      {/* <mesh geometry={nodes.Cube002.geometry} material={materials['Material.007']} position={[0, 10, 0]} scale={[12.5, 12.5, 6.25]} /> */}
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.008']} position={[-12.03, 10, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[5, 1, 5]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.009']} position={[-11.67, 20.93, 0]} rotation={[0, 0, Math.PI / 4]} scale={[1.36, 3.41, 0.82]} />
    </group>
  )
}

useGLTF.preload('/lang_pc.gltf')