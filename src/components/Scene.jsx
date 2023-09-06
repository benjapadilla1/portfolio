/* eslint-disable react/no-unknown-property */
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
  useScroll,
} from "@react-three/drei";
import { Avatar } from "../Objects/Avatar";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import BgAnimations from "./bgAnimations";
import Projects from "./Projects";
import BgColor from "./BgColor";

const Scene = () => {
  const data = useScroll();
  const [section, setSection] = useState(0);
  useFrame(() => {
    const curSection = Math.floor(data.scroll.current * data.pages);
    if (curSection !== section) setSection(curSection);
  });
  return (
    <>
      {/* <OrbitControls enablePan={false} enableRotate={true} enableZoom={false} /> */}
      {/* <Sky /> */}
      <BgColor />
      {/* <Environment preset="sunset" /> */}
      <BgAnimations />
      <group position-y={-Math.PI / 3}>
        <ContactShadows
          opacity={0.8}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar
          animation={
            section === 0
              ? "Wave"
              : section === 1
              ? "Nod"
              : section === 2
              ? "Sitting"
              : "Standing"
          }
        />
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
      </group>
      <ambientLight intensity={2} />
      {section === 2 && <Projects />}
    </>
  );
};

export default Scene;
