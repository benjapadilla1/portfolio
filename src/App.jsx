import { motion } from "framer-motion";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import RotatingBox from "./Objects/RotatingBox";
import { Model } from "./Objects/Ovni";
import { Suspense } from "react";
import bg from "/assets/bg.hdr?url";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Words } from "./Objects/Words";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="h-screen"
    >
      <Link to={"/home"}>
        <Canvas shadowmap="true" camera={{ position: [0, 0, 8] }}>
          <Suspense fallback={null}>
            <Environment files={bg} background={true} />
            <PerspectiveCamera makeDefault fov={60} position={[0, 3, 15]} />

            <ambientLight intensity={0.1} />
            <pointLight position={[10, 10, 30]} intensity={1} />

            <Model />
            <Words />

            <OrbitControls
              enablePan={false}
              enableRotate={true}
              enableZoom={false}
            />
            <EffectComposer>
              <Bloom
                blendFunction={BlendFunction.ADD}
                intensity={1.3}
                width={300}
                height={300}
                kernelSize={5}
                luminanceThreshold={0.45}
                luminanceSmoothing={0.025}
              />
              <ChromaticAberration
                blendFunction={BlendFunction.NORMAL}
                offset={[0.0005, 0.0012]}
              />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </Link>
    </motion.div>
  );
}
