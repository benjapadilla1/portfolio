import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";

const BgAnimations = () => {
  return (
    <>
      <Float>
        <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
          <sphereGeometry />
          <MeshDistortMaterial
            opacity={0.8}
            transparent
            distort={0.4}
            speed={4}
            color={"red"}
          />
        </mesh>
      </Float>
      <Float>
        <mesh position={[3, 1, -18]} scale={[2.1, 2.1, 2.1]}>
          <sphereGeometry />
          <MeshDistortMaterial
            opacity={0.8}
            transparent
            distort={1}
            speed={4}
            color={"yellow"}
          />
        </mesh>
      </Float>
      <Float>
        <mesh position={[-3, -1, -11]} scale={[1.4, 1.4, 1.4]}>
          <boxGeometry />
          <MeshWobbleMaterial
            opacity={0.8}
            transparent
            factor={1}
            speed={5}
            color={"blue"}
          />
        </mesh>
      </Float>
    </>
  );
};

export default BgAnimations;
