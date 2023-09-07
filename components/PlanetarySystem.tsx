'use client'

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import { semiMinorRadius } from '@/utils/converters';
import * as THREE from 'three';

function SytemInformation({planet}) {
    return (
        <div className='container text-white bg-black h-screen w-[20%]'>
            <h1 className='text-center font-sans'>Planet: {planet.pl_name}</h1>
            <br/>
            <h2 className='text-center font-sans'>Stellar name: {planet.hostname}</h2>
            <h2 className='text-center font-sans'>Number of moons: {planet.sy_mnum}</h2>
            <br/>
            <br/>
            <p className='text-center font-sans'>Discovery Method: {planet.discoverymethod} <br/>
               Discovery Year: {planet.disc_year} <br/>
	           Discovery Facility: {planet.disc_facility}</p>
        </div>
    )
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
    const points = [];

    for (let index = 0; index < 64; index++) {
      const angle = (index / 64) * 2 * Math.PI;
      const x = xRadius * Math.cos(angle);
      const z = zRadius * Math.sin(angle);
      points.push(new THREE.Vector3(x, 0, z));
    }
    points.push(points[0]);

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    return (
      <>
        <line geometry={lineGeometry}>
            <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
        </line>
        <Sphere position={points[Math.floor(Math.random()*points.length)]} />
      </>
    );
  }

  function Planet({ xRadius = 1, zRadius = 1 }) {
    return (
      <>
        <Ecliptic xRadius={xRadius} zRadius={zRadius} />
      </>
    );
  }

export default function PlanetarySystem({data}): React.ReactElement {
  return (
    <div className="flex"> 
        <SytemInformation planet={data} />
        <Canvas className='w-auto h-screen'>
        <ambientLight intensity={1} />
        <color attach="background" args={['black']} />
        <OrbitControls />
        <Stars/>
        <Sphere position={[0, 0, 0]} />
        <Planet zRadius={semiMinorRadius(data.pl_orbsmax, data.pl_orbeccen)*30} xRadius={data.pl_orbsmax*30} />      
        </Canvas>
    </div>
  );
}
