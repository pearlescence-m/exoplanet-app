import { Vector3 } from 'three'

export function toXYZ(
  galacticLatitude: number | null,
  galacticLongitude: number | null,
  distance: number | null
): Vector3 {
  const CartesianDistance = Number(distance)
  const theta = Number(galacticLatitude) * (Math.PI / 180)
  const phi = Number(galacticLongitude) * (Math.PI / 180)

  const x = CartesianDistance * Math.cos(theta) * Math.cos(phi)
  const y = CartesianDistance * Math.cos(theta) * Math.sin(phi)
  const z = CartesianDistance * Math.sin(theta)

  return new Vector3(Math.round(x), Math.round(y), Math.round(z))
}

export const orbitalRadius = (
  period: number
): number => {
  const T2 = (period * 173.13) ** 2;
  const R = Math.cbrt(T2)
  return R
}

// export function RandomCelestialObject({ }) {
//   // Generate random coordinates within a defined space
//   const randomX = (Math.random() - 0.5) * 100; // Adjust the range as needed
//   const randomY = (Math.random() - 0.5) * 100;
//   const randomZ = (Math.random() - 0.5) * 100;
// }