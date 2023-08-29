/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ovni.glb
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/ovni.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.flight.play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="RootNode0" scale={0.01}>
          <group name="skeletal1">
            <primitive object={nodes.root2} />
          </group>
          <group name="geo10">
            <skinnedMesh
              name="ufo11"
              geometry={nodes.ufo11.geometry}
              material={nodes.ufo11.material}
              skeleton={nodes.ufo11.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/ovni.glb");
