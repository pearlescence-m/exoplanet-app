'use client'

import React, { Suspense, useState } from 'react'
import { Canvas, Vector3 } from '@react-three/fiber'
import { Sphere, OrbitControls, Html } from '@react-three/drei'
import Link from 'next/link'

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
    <Canvas camera={{ fov: 35, zoom: 0.3, near: 1, far: 1000 }}>
      <color attach="background" args={['black']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[100, 100, 100]} />
      <OrbitControls />
      <Sphere position={[0, 0, 0]}>
        <mesh>
          <boxGeometry args={[1, 0.2, 0.2]} />
          <meshStandardMaterial color="white" />
          <Html
            center
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black p-4"
          >
            <h2>Sol</h2>
          </Html>
        </mesh>
      </Sphere>

      <Suspense fallback={<p>Loading exoplanets...</p>}>
        {props.data.map((exoplanet) => (
          <Sphere
            key={exoplanet.id}
            position={exoplanet.coords}
            onClick={() => handlePlanetClick(exoplanet.id)}
          >
            <Suspense fallback={<p>Loading name...</p>}>
              {selectedPlanet === exoplanet.id && (
                <mesh>
                  <boxGeometry args={[1, 0.2, 0.2]} />
                  <meshStandardMaterial color="white" />
                  <Html
                    center
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white p-4"
                  >
                    <Link
                      key={exoplanet.id}
                      href={`/${exoplanet.id}`}
                    >
                      <u>{exoplanet.name}</u>
                    </Link>
                  </Html>
                </mesh>
              )}
            </Suspense>
          </Sphere>
        ))}
      </Suspense>
    </Canvas>
  )
}
