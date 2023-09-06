/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useFrame, useThree } from "@react-three/fiber";
import { projects } from "../utils/data";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { Image, Text } from "@react-three/drei";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import github from "/assets/github.svg";
import web from "/assets/web.svg";

const Project = (props) => {
  const { project, highlighted } = props;
  const bg = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    bg.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh position-z={-0.001} ref={bg}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="#4d4f75" transparent opacity={0.9} />
      </mesh>
      <Image
        scale={[1.6, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
        opacity={0.9}
      />
      <Image
        position={[0.7, 0.8, 0.001]}
        scale={[0.2, 0.2, 1]}
        onClick={() => window.open(project.repository, "_blank")}
        style={{ cursor: "pointer" }}
        url={github}
      />
      <Image
        position={[-0.69, 0.8, 0.001]}
        scale={[0.2, 0.2, 1]}
        onClick={() => window.open(project.url, "_blank")}
        className="cursor-pointer"
        style={{ cursor: "pointer" }}
        url={web}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-0.8, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={1.8}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.1}
        position={[-0.8, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));
const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);
  const isMobile = window.innerWidth < 768;

  return (
    <group
      position-y={
        isMobile ? -viewport.height * 1.85 + 5.5 : -viewport.height * 2 + 5.5
      }
    >
      {projects.map((project, i) => (
        <motion.group
          key={"project" + i}
          position={[i * 2.5, 0, -3]}
          initial={{
            opacity: 0,
          }}
          animate={{
            x: 0 + (i - currentProject) * 2.5,
            y: currentProject === i ? 0 : -0.1,
            z: currentProject === i ? -2 : -3,
            rotateX: currentProject === i ? 0 : -Math.PI / 3,
            rotateZ: currentProject === i ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={i === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};

export default Projects;
