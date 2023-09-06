'use client'

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { orbitalRadius } from '@/utils/converters';
import Exoplanet, { Exoplanets } from '@/models/Exoplanet';

type PS = {
    exoplanet: Exoplanets
}

// function Sun({ radius, position, luminosity }) {
//     const emissiveIntensity = luminosity * 0.001;

//   return (
//     <mesh position={position}>
//       <sphereGeometry args={[radius, 32, 32]} />
//       <meshStandardMaterial
//         color="yellow"
//         emissive="white"
//         emissiveIntensity={emissiveIntensity}
//       />
//     </mesh>
//   );
// }

// function Planet({ radius, position }) {
//   return (
//     <mesh position={position}>
//       <sphereGeometry args={[radius, 32, 32]} />
//       <meshStandardMaterial color="blue" />
//     </mesh>
//   );
// }

const Orbit = (radius: number): React.ReactElement => {
  return (
    <line>
      <circleGeometry args={[radius, 128]} />
      <lineBasicMaterial color="white" />
    </line>
  );
}

export default function PlanetarySystem({data}): React.ReactElement {
    console.log(data)
  return (
    <Canvas camera={{ position: [0, 0, 50] }}>
      <OrbitControls />
      {/* {Array.from(Array(this.state.points)).map((x, index) => <Star key={index} />)} */}

      {/* {Array(data.sy_snum).fill( <Sun radius={data.st_rad} position={sun.position} luminosity={data.st_lum}/> )} */}
      {/* <Planet radius={data.pl_rade} position={planet.position} /> */}
      {Array(data.sy_pnum).fill( 
        <>
        <Orbit radius={orbitalRadius(data.pl_orbper)} />

        </>
      )}
      
    </Canvas>
  );
}
