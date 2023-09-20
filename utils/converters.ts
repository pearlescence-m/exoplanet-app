import * as THREE from 'three'

export function toXYZ(
  galacticLatitude: number | null,
  galacticLongitude: number | null,
  distance: number | null
): THREE.Vector3 {
  const CartesianDistance = Number(distance)
  const theta = Number(galacticLatitude) * (Math.PI / 180)
  const phi = Number(galacticLongitude) * (Math.PI / 180)

  const x = CartesianDistance * Math.cos(theta) * Math.cos(phi)
  const y = CartesianDistance * Math.cos(theta) * Math.sin(phi)
  const z = CartesianDistance * Math.sin(theta)

  return new THREE.Vector3(Math.round(x*2), Math.round(y*2), Math.round(z*2))
}

export const semiMinorRadius = (
  semiMajorRadius: number,
  eccentricity: number
): number => {
  const R = semiMajorRadius * Math.sqrt(1 - (eccentricity ** 2))
  return R
}

export function generateEllipticalPathPoints(
  xRadius: number,
  zRadius: number,
  numPoints: number
): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];

  for (let i = 0; i < numPoints; i++) {
    const theta = (i / numPoints) * Math.PI * 2;
    const x = xRadius * Math.cos(theta);
    const z = zRadius * Math.sin(theta);
    const y = 0; // You can adjust this if you want the ellipse at a different height

    points.push(new THREE.Vector3(x, y, z));
  }

  return points;
}