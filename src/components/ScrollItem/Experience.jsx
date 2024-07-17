import { Model } from "../Model/NewScene";
import { Avatar } from "../Model/Avatar";
import { motion } from "framer-motion-3d";
import { useControls } from "leva";
import ProjectsModel from "./ProjectsModel";
import React, { useEffect, useState, useRef } from "react";
import * as THREE  from 'three'
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useScroll } from "@react-three/drei";
export const Experience = (props) => {
  // eslint-disable-next-line react/prop-types
  const { viewport } = useThree();
  const data = useScroll();
  const [section, setSection] = useState(0);
  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  
  const characterContainerAboutRef = useRef();

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
    };
  }, [section]);

  useFrame((state) => {
    const curSection = Math.floor(data.scroll.current * data.pages);
    if (curSection != section) {
      setSection(curSection);
    }

    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);
    // console.log([position.x, position.y, position.z])

    // const quaterion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaterion);
    // const euler = new THREE.Euler().setFromQuaternion(quaterion, "XYZ");
    // console.log([euler.x, euler.y, euler.z])
  });
  return (
    <>
      {/* Home */}
      <ambientLight intensity={1} />
      <motion.group
        rotation={[0.15, -Math.PI / 3, 0.05]}
        scale={0.4}
        position={[2, -0.5, 0]}
        
        // animate={{ x: -0.7, y: -1.6, z: 5.8, rotateY: -Math.PI / 2 }}
      >
        <Model />
        {/* <group
          name="CharacterSpot"
          position={[-1.52, -0.04, -1.22]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={2}
          ref={characterContainerAboutRef}
        >
          <Avatar animation={characterAnimation} />
        </group> */}
      </motion.group>

      {/* Skills */}
      <motion.group
        // [-3.0493116590225755, -0.52287738826479, 3.1127451714945633]
        position={[2.1194001512409018, -0.4308999375992163, -0.7674847133721022]}
        rotation={[-3.0493116590225755, -0.52287738826479, 3.1127451714945633]}
        // animate={{
        //   z: section === 1 ? 0 : -10,
        //   y: section === 1 ? -viewport.height : -1.5,
        // }}
        animate={"" + section}
        transition={{
          duration: 1,
        }}
        variants={{
          0: {
            scaleX: 0.9,
            scaleY: 0.9,
            scaleZ: 0.9,
          },
          1: {
            y: -viewport.height - 1,
            x: 0,
            z: 3.5,
            scaleX: 0.8,
            scaleY: 1,
            scaleZ: 0.9,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          }
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>

      {/* Projects */}
      <ProjectsModel />
    </>
  );
};
