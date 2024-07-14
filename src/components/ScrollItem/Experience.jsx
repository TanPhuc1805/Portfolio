import { Model } from "../Model/NewScene";
import { Avatar } from "../Model/Avatar";
import { motion } from "framer-motion-3d";
import { useControls } from "leva";
import ProjectsModel from "./ProjectsModel";
import React, { useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useScroll } from "@react-three/drei";
export const Experience = (props) => {
  // eslint-disable-next-line react/prop-types
  const {viewport} = useThree();
  const data = useScroll()
  const [section, setSection] = useState(0);
  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Standing", "Falling"],
    },
  });

  useEffect(() => {
    setCharacterAnimation("Falling");
    const timerId = setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 1000);
    
    return () => {
      clearTimeout(timerId);
    }
  }, [section])

  useFrame((state) => {
    const curSection = Math.floor(data.scroll.current * data.pages);
    if (curSection != section) {
      setSection(curSection);
    }
  })
  return (
    <>
      {/* Home */}
      <ambientLight intensity={1} />
      <motion.group
        rotation={[0.4, -Math.PI / 5, 0.1]}
        scale={0.5}
        position={[1.5, -0.5, 0]}
        // animate={{ x: -0.7, y: -1.6, z: 5.8, rotateY: -Math.PI / 2 }}
      >
        <Model />
        <group
          name="CharacterSpot"
          position={[-1.52, -0.04, -1.22]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={2}
        >
          <Avatar animation={characterAnimation} />
        </group>
      </motion.group>

      {/* Projects */}
      <ProjectsModel/>
    </>
  )
};
