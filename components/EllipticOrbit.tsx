'use client'

import React, { useLayoutEffect, useMemo, useRef } from 'react'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { fragmentShader, vertexShader } from '@/utils/shaders'
import { useFrame } from '@react-three/fiber'

interface EllipticOrbit {
  xRadius: number
  zRadius: number
}

export function EllipticOrbit({ xRadius, zRadius }: EllipticOrbit) {
  const mesh = useRef<THREE.Mesh>(null!)
  const refer = useRef<THREE.BufferGeometry>(null!)

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_mouse: { value: new THREE.Vector2(0, 0) },
      u_bg: {
        value: new THREE.Color('#A1A3F7'),
      },
      u_colorA: { value: new THREE.Color('#9FBAF9') },
      u_colorB: { value: new THREE.Color('#FEB3D9') },
    }),
    []
  )

  useFrame((state) => {
    const { clock } = state;
    uniforms.u_time.value = clock.getElapsedTime();
    mesh.current.rotation.y += 0.0002;
  });

  const points: THREE.Vector3[]= useMemo(() => {
    const curve = new THREE.EllipseCurve( 0,  0, xRadius, zRadius, 0,  2 * Math.PI, false, 0 );
    const vector2Points= curve.getPoints(150);
    const calculatedPoints = vector2Points.map((point) => new THREE.Vector3(point.x, 0, point.y));
    return calculatedPoints

  }, [xRadius, zRadius])

  useLayoutEffect(() => {
    if (refer.current) {
      refer.current.setFromPoints(points)
    }
  }, [points])

  return (
    <>
      <line>
        <bufferGeometry attach="geometry" ref={refer} />
        <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
      </line>
      <mesh ref={mesh}>
      <Sphere position={points[Math.floor(Math.random() * points.length)]}>
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
          wireframe={false}
        />
      </Sphere>
      <axesHelper/>
      </mesh>
    </>
  )
}
