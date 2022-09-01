/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MousePad(props) {
  const { nodes, materials } = useGLTF('/Mouse_pad.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Rectangle.geometry} material={materials.Fabric} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('/Mouse_pad.glb')