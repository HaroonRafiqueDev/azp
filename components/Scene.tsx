"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedSphere() {
    const meshRef = useRef<any>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.2;
            meshRef.current.rotation.y = t * 0.3;
        }
    });

    return (
        <Sphere args={[1, 100, 200]} scale={2.5} ref={meshRef}>
            <MeshDistortMaterial
                color="#00f2ff"
                attach="material"
                distort={0.5}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
                wireframe
            />
        </Sphere>
    );
}

export default function Scene() {
    return (
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
}
