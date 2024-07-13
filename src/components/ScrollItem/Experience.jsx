import { Model } from "../../ArcadeRoom_V1";
import { motion } from "framer-motion-3d";

export const Experience = (props) => {
  // eslint-disable-next-line react/prop-types
  const { section } = props;
  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Model section={section} />
      </motion.group>
    </>
  );
};
