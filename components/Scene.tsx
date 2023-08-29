'use client'

import React from 'react'
import { Canvas, Vector3 } from '@react-three/fiber'
import { Sphere, OrbitControls, Float} from '@react-three/drei'

type ExoplanetProps = {
  data: {
    id: number
    coords: Vector3
  }[]
}

export default function Scene(props: ExoplanetProps): React.ReactElement {
  return (
    <Canvas camera={{ fov: 35, zoom: 0.3, near: 1, far: 1000 }}>
      <color attach="background" args={['black']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[100, 100, 100]} />
      <Sphere position={[0, 0, 0]} />
      <OrbitControls />
      {props.data.map((exoplanet) => (
        <Sphere key={exoplanet.id} position={exoplanet.coords} />
      ))}
    </Canvas>
  )
}
