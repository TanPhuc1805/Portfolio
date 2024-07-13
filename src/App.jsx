import { Model } from "./components/Model/NewScene";
import { Avatar } from "./components/Model/Avatar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React from "react";
import "./App.css";
import "./components/NavigationBar/NavigationBar";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Interface } from "./components/ScrollItem/Interface";
import { useControls } from "leva";

function Model3D() {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Standing", "Falling"],
    },
  });
  return (
    <>
      <Canvas style={{ height: "100%" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={10} />
        <ScrollControls pages={7} damping={0.1}>
          <motion.group
            rotation={[0.4, -Math.PI / 5, 0.1]}
            scale={0.5}
            position={[1.5, -0.5, 0]}
          >
            <Model />
            <group
              name="CharacterSpot"
              position={[-1.52, -0.04, -1.22]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={2}
            >
              <Avatar animation={animation} />
            </group>
          </motion.group>
          <Scroll html>
            {/* <About /> */}
            <Interface />
          </Scroll>
        </ScrollControls>
        {/* <OrbitControls minDistance={2} maxDistance={10} /> */}
      </Canvas>
    </>
  );
}

function Avatar3D() {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Standing", "Falling"],
    },
  });

  return (
    <Canvas style={{ height: "100%" }}>
      {/* <color attach="background" args={["#E87339"]} /> */}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={3} />

      <motion.group
        rotation={[0.3, -Math.PI / 5, 0.1]}
        scale={2}
        position={[2, -1.5, 1]}
      >
        <Avatar animation={animation} />
      </motion.group>

      <OrbitControls minDistance={2} maxDistance={10} />
    </Canvas>
  );
}

function App() {
  return (
    <div className="relative h-screen">
      <Model3D />
      {/* <Avatar3D/> */}
      <NavigationBar />
      <div className="gradient-background absolute inset-0 z-[-1]">
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
