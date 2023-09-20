'use client'

import React, { Suspense, useState } from 'react'
import { Canvas, Vector3 } from '@react-three/fiber'
import { Sphere, OrbitControls, Html } from '@react-three/drei'
import Planet from './Planet'
import {
  EffectComposer,
  Bloom,
  Noise
} from "@react-three/postprocessing";

type ExoplanetProps = {
  data: {
    id: string
    coords: Vector3
    name: string
  }[]
}

export default function Scene(props: ExoplanetProps): React.ReactElement {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null)

  const handlePlanetClick = (id: string) => {
    setSelectedPlanet(id)
  }

  return (
    <Canvas camera={{ fov: 20, zoom: 1, near: 10, far: 100000 }}>
      <color attach="background" args={['#000814']} />
      <ambientLight intensity={1} />
      <OrbitControls />
      <Sphere position={[0, 0, 0]}>
        <mesh>
          <boxGeometry args={[1, 0.2, 0.2]} />
          <meshStandardMaterial color="white" />
          <Html
            center
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black p-4"
          >
            <h2>Earth</h2>
          </Html>
        </mesh>
      </Sphere>

      <Suspense fallback={<p>Loading exoplanets...</p>}>
        {props.data.map((exoplanet) => (
          <Planet 
            key={exoplanet.id}
            exoplanet={exoplanet} 
            selectedPlanet={selectedPlanet} 
            onPlanetClick={handlePlanetClick}/>
        ))}
      </Suspense>

      <EffectComposer>
        <Bloom luminanceThreshold={0.7} luminanceSmoothing={0.9} height={200} />
        <Noise opacity={0.02} />
      </EffectComposer>
    </Canvas>
  )
}
