/* eslint-disable react/no-unknown-property */
import {
  Environment,
  OrbitControls,
  Scroll,
  ScrollControls,
  Sky,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./Objects/Avatar";
import Interface from "./components/Interface";
import { useState } from "react";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";

const App = () => {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll html>
            <Interface />
          </Scroll>

          <OrbitControls
            enablePan={false}
            enableRotate={true}
            enableZoom={false}
          />
          <Sky />
          <Environment preset="sunset" />

          <group position-y={-1}>
            <Avatar />
          </group>
          <ambientLight intensity={2} />
        </ScrollControls>
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </>
  );
};

export default App;
