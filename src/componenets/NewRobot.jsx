import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const RobotModel = () => {
  const { scene } = useGLTF("/models/cyber_shell_concept_free.glb"); // Adjust path if needed
  return <primitive position={[0,-2,0]} rotation={[0,-0.6,0]} object={scene} scale={1.8} />;
};

const RobotScene = () => {
  return (
    <Canvas
      camera={{ position: [5, 2, 3], fov: 50 }}
      style={{ width: "100vw", height: "100vh", background: "black" }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RobotModel  />
      <OrbitControls />
    </Canvas>
  );
};

export default RobotScene;
