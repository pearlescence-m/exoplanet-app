'use client'

import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Stars } from '@react-three/drei'
import { semiMinorRadius } from '@/utils/converters'
import { Exoplanets } from 'Exoplanets'
import * as THREE from 'three'
import { EllipticOrbit } from './EllipticOrbit'
import { fragmentShader, vertexShader } from '@/utils/shaders'

type Props = { data: Exoplanets }

function SystemInformation({ data }: Props) {
  return (
    <div className="container text-white bg-black h-screen w-[20%]">
      <h1 className="text-center font-sans">Exoplanet: {data.pl_name}</h1>
      <br />
      <h2 className="text-center font-sans">Stellar name: {data.hostname}</h2>
      <h2 className="text-center font-sans">
        Number of moons: {data.sy_mnum}
      </h2>
      <br />
      <br />
      <p className="text-center font-sans">
        Discovery Method: {data.discoverymethod} <br />
        Discovery Year: {data.disc_year} <br />
        Discovery Facility: {data.disc_facility}
      </p>
    </div>
  )
}

export default function PlanetarySystem({ data }: Props): React.ReactElement {
  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_mouse: { value: new THREE.Vector2(0, 0) },
      u_bg: {
        value: new THREE.Color('#f18805'),
      },
      u_colorA: { value: new THREE.Color('#ef271b') },
      u_colorB: { value: new THREE.Color('#fff75e') },
    }),
    []
  )

  return (
    <div className="flex">
      <SystemInformation data={data} />
      <Canvas className="w-[80%] h-screen">
        <ambientLight intensity={1} />
        <color attach="background" args={['black']} />
        <OrbitControls />
        <Stars />
        <Sphere position={[0, 0, 0]} >
          <shaderMaterial
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            uniforms={uniforms}
            wireframe={false}
          />
        </Sphere>
        <EllipticOrbit
          zRadius={semiMinorRadius(data.pl_orbsmax, data.pl_orbeccen) * 30}
          xRadius={data.pl_orbsmax * 30}
        />
      </Canvas>
    </div>
  )
}
