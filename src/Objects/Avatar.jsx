/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 64f0a45b81fe5bc74979a840.glb
*/

import { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";
import { gsap } from "gsap";
export function Avatar(props) {
  const { animation } = props;
  const group = useRef();

  const isMobile = window.innerWidth < 840;

  let { cursorFollow } = useControls({
    cursorFollow: false,
  });

  if (animation === "Standing" && !isMobile) {
    cursorFollow = true;
  }

  const { nodes, materials } = useGLTF("/models/64f0a45b81fe5bc74979a840.glb");

  const { animations: waveAnimation } = useFBX("/animations/wave.fbx");
  const { animations: nodAnimation } = useFBX("/animations/Nod.fbx");
  const { animations: standingAnimation } = useFBX("/animations/standing.fbx");
  const { animations: phoneAnimation } = useFBX("/animations/Phone.fbx");
  const { animations: sittingAnimation } = useFBX("/animations/Sitting.fbx");

  waveAnimation[0].name = "Wave";
  nodAnimation[0].name = "Nod";
  standingAnimation[0].name = "Standing";
  phoneAnimation[0].name = "Phone Call";
  sittingAnimation[0].name = "Sitting";

  const { actions } = useAnimations(
    [
      waveAnimation[0],
      nodAnimation[0],
      standingAnimation[0],
      phoneAnimation[0],
      sittingAnimation[0],
    ],
    group
  );

  const handleRotation = (targetY, targetX, time) => {
    gsap.to(group.current.rotation, {
      y: targetY,
      duration: time,
    });
    gsap.to(group.current.position, {
      x: targetX,
      duration: time,
    });
    if (targetY === -0.2) {
      gsap.to(group.current.position, {
        y: targetY,
        duration: time,
      });
    } else {
      gsap.to(group.current.position, {
        y: 0,
        duration: time,
      });
    }
  };

  useEffect(() => {
    actions[animation].reset().fadeIn(1).play();

    let targetRotation;
    if (isMobile) {
      targetRotation =
        animation === "Nod" || animation === "Standing"
          ? -Math.PI / 71
          : animation === "Sitting"
          ? -Math.PI
          : -0.2;
    } else {
      targetRotation =
        animation === "Nod" || animation === "Standing"
          ? -Math.PI / 4
          : animation === "Sitting"
          ? Math.PI / 0.83
          : 0;
    }

    handleRotation(
      targetRotation,
      isMobile
        ? animation === "Sitting"
          ? 0
          : animation === "Wave"
          ? 0.3
          : 0
        : animation === "Sitting"
        ? 1
        : 0,

      isMobile ? 0.5 : 1
    );

    return () => {
      actions[animation].reset().fadeOut(1);
    };
  }, [animation, isMobile]);

  useFrame((state) => {
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName("Head").lookAt(target);
    }
  });

  return (
    <group {...props} ref={group} dispose={null}>
      <group rotation-x={-Math.PI / 2}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/64f0a45b81fe5bc74979a840.glb");

useFBX.preload("/animations/Nod.fbx");
useFBX.preload("/animations/Phone.fbx");
useFBX.preload("/animations/standing.fbx");
useFBX.preload("/animations/wave.fbx");
useFBX.preload("/animations/Sitting.fbx");
