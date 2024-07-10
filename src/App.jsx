import { Model } from "./components/Model/Scene";
import { Avatar } from "./components/Model/Avatar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import React from "react";
import "./App.css";
import "./components/NavigationBar/NavigationBar";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function About(props) {
  const { setSection } = props;
  return (
    <div className="absolute top-0 left-5 p-8 text-white h-full flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl font-[K2D] leading-snug mt-8 md:mt-0">
        Hello, We're
        <br />
        <span className="px-1 font-[K2D]"> HeyDucks Team</span>
      </h1>
      <motion.p
        className="text-lg text-gray-200 mt-4 font-[K2D]"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        We specialize in creating 3D visuals,
        <br />
        designing user interfaces, and developing web applications.
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-[K2D] text-lg mt-4 md:mt-16"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact us now
      </motion.button>
    </div>
  );
}
function Model3D() {
  return (
    <Canvas style={{ height: "100%" }}>
      {/* <color attach="background" args={["#E87339"]} /> */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <motion.group
        rotation={[0.4, -Math.PI / 3, 0.1]}
        scale={0.4}
        position={[2.25, -0.5, 0]}
      >
        <Model />
      </motion.group>
      <OrbitControls minDistance={2} maxDistance={10} />
    </Canvas>
  );
}

function Avatar3D() {
  return (
    <Canvas style={{ height: "100%" }}>
      {/* <color attach="background" args={["#E87339"]} /> */}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <motion.group
        rotation={[0.3, -Math.PI / 5, 0.1]}
        scale={2}
        position={[2, -2, 1]}
      >
        <Avatar />
      </motion.group>
      <OrbitControls minDistance={2} maxDistance={10} />
    </Canvas>
  );
}

function App() {
  return (
    <div className="relative h-screen">
      <About />
      {/* <Model3D /> */}
      <Avatar3D />
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
