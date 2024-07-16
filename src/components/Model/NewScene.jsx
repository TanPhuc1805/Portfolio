import React, { useRef } from "react";
import {
  useGLTF,
  useAnimations,
  Html,
  useVideoTexture,
} from "@react-three/drei";

function ScreenEmulator({ x, y, z, ry }) {
  const divRef = useRef();

  return (
    <group position={[x, y, z]} rotation={[0, ry, 0]}>
      <Html transform>
        <div
          ref={divRef}
          style={{
            width: "64px",
            height: "36px",
            backgroundColor: "#000",
          }}
        >
          <iframe
            style={{
              width: "64px",
              height: "36px",
              border: "0px",
            }}
            src={`https://windows11-emulator.onrender.com/`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </Html>
    </group>
  );
}

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/newScene-transformed.glb");
  const { actions } = useAnimations(animations, group);
  const textureVSCode = useVideoTexture("textures/vscode.mp4");

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="CharacterSpot"
          position={[-1.52, -0.04, -1.22]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={2}
        ></group>
        <mesh
          name="Object_23"
          geometry={nodes.Object_23.geometry}
          material={materials.PaletteMaterial001}
          position={[-2.845, 1.371, -1.386]}
          scale={1.205}
        />
        <mesh
          name="Object_16"
          geometry={nodes.Object_16.geometry}
          material={materials.base_cama}
          position={[-1.049, -0.692, 1.149]}
          scale={1.419}
        />
        <mesh
          name="Object_4"
          geometry={nodes.Object_4.geometry}
          material={materials.pared}
          position={[0.095, -0.373, 0.14]}
          scale={4.819}
        />
        <mesh
          name="Object_5"
          geometry={nodes.Object_5.geometry}
          material={materials.suelo}
          position={[0.095, -0.373, 0.14]}
          scale={4.819}
        />
        <mesh
          name="Object_55"
          geometry={nodes.Object_55.geometry}
          material={materials.libro}
          position={[-2.771, 4.559, -3.744]}
          rotation={[Math.PI, 0, 2.849]}
          scale={[0.085, 0.433, 0.303]}
        />
        <mesh
          name="Object_31"
          geometry={nodes.Object_31.geometry}
          material={materials.pcinsidenormal}
          position={[-3.958, 1.431, -3.489]}
          scale={0.077}
        />
        <mesh
          name="Object_34"
          geometry={nodes.Object_34.geometry}
          material={materials.screen}
          position={[-3.781, 2.47, -1.132]}
          scale={1.456}
          onClick={() => console.log("clicked")}
        >
          <ScreenEmulator x={0} y={0} z={0} ry={Math.PI / 2} />
        </mesh>
        <mesh
          name="Object_37"
          geometry={nodes.Object_37.geometry}
          material={materials.PaletteMaterial002}
          position={[-2.793, 1.422, -2.237]}
          scale={[0.137, 0.04, 0.083]}
        />
        <mesh
          name="Object_42"
          geometry={nodes.Object_42.geometry}
          material={materials.PaletteMaterial003}
          position={[-2.859, 1.4, -0.919]}
          scale={[0.266, 0.019, 0.797]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/newScene-transformed.glb");
