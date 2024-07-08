/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/scene.gltf --transform 
Files: public/scene.gltf [7.7KB] > /Users/vochanhtin139/Desktop/ui-test/scene-transformed.glb [93.5KB] (-1114%)
Author: IsaacTheMaverick (https://sketchfab.com/IsaacTheMaverick)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-room-a6bf7976f3ac401e96907aa5b8a0c1c1
Title: Low Poly Room
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube002_UberTexture_0.geometry} material={materials.UberTexture} position={[-126.857, 16.425, 29.041]} rotation={[-Math.PI / 2, 0, 0]} scale={16.095} />
      <mesh geometry={nodes.Cube002_PC_Glass_0.geometry} material={materials.PC_Glass} position={[-126.857, 16.425, 29.041]} rotation={[-Math.PI / 2, 0, 0]} scale={16.095} />
      <mesh geometry={nodes.Cube002_Floor_0.geometry} material={materials.Floor} position={[-126.857, 16.425, 29.041]} rotation={[-Math.PI / 2, 0, 0]} scale={16.095} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')