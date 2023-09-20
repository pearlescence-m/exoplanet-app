import React, { Suspense, useMemo } from 'react'
import { Sphere, Html } from '@react-three/drei'
import Link from 'next/link'
import { ExoplanetPropsWithID } from 'Exoplanets'
import * as THREE from 'three'
import { fragmentShader, vertexShader } from '@/utils/shaders'

type PlanetProps = {
  exoplanet: ExoplanetPropsWithID
  selectedPlanet: string | null
  onPlanetClick: (id: string) => void
}

export default function Planet({
  exoplanet,
  selectedPlanet,
  onPlanetClick,
}: PlanetProps) {

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

  return (
    <Sphere
      key={exoplanet.id}
      position={exoplanet.coords}
      onClick={(e) => onPlanetClick(exoplanet.id)}
    >
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
      <Suspense fallback={<p>Loading name...</p>}>
        {selectedPlanet === exoplanet.id && (
          <mesh>
            <boxGeometry args={[1, 0.2, 0.2]} />
            <meshStandardMaterial color="white" />
            <Html
              center
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white p-4"
            >
              <Link key={exoplanet.id} href={`/${exoplanet.id}`}>
                <u>{exoplanet.name}</u>
              </Link>
            </Html>
          </mesh>
        )}
      </Suspense>
    </Sphere>
  )
}
