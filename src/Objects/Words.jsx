import { Float, Text3D } from "@react-three/drei";
import { useEffect, useState } from "react";

export function Words() {
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);

  return (
    <>
      <Float position={[3.75, 5.5, 0]} speed={0.7}>
        <Text3D
          font={process.env.PUBLIC_URL + "../../fonts/Roboto_Regular.json"}
          size={0.275}
          height={0.065}
          curveSegments={12}
        >
          Full Stack Developer
          <meshStandardMaterial
            color={[1, 1, 1]}
            emissive={[20 / 255, 20 / 255, 20 / 255]}
          />
        </Text3D>
      </Float>
      <Float position={[3.4, 6, 0]} speed={0.7}>
        <Text3D
          font={process.env.PUBLIC_URL + "../../fonts/Roboto_Regular.json"}
          size={0.575}
          height={0.065}
          curveSegments={12}
        >
          Benjamin Padilla
          <meshStandardMaterial
            color={[1, 1, 1]}
            emissive={[20 / 255, 20 / 255, 20 / 255]}
          />
        </Text3D>
      </Float>
      <Text3D
        font={process.env.PUBLIC_URL + "../../fonts/Roboto_Regular.json"}
        curveSegments={12}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        Home
      </Text3D>
    </>
  );
}
